---
slug: "gridlink-building-a-scalable-backend"
title: "Building a scalable backend"
subtitle: ""
series: "Gridlink"
description: "Building a database and REST API using Django and PostgreSQL"
localimage: "/images/django-postgres.png"
publishedAt: "2022-12-03T09:00:00.000Z"
tags: ""
published: true
---

## Introduction

Django is a framework for building monolithic web applications.

Although not typically associated with performance at scale, a monolith can be feasible if it is kept **stateless** and **modular**.

- Statelessness, where an application server is dependent only on third-party storage, allows us to leverage horizontal scaling. This is the usage of parallel servers to distribute load across multiple nodes.
- Modularity will allow us to easily migrate to a microservices architecture in the future.

Django already encourages breaking a project into apps, where each app has its own data models, data views, routes and tests. It also comes with an object-relational mapper (ORM) for interfacing with an SQL database. These characteristics lead to a well-structured Django project being logically similar to microservices.

How about the database? Postgres already does a good job of handling tens of thousands of concurrent requests per second, which means that we won't have to worry about scaling for a while. If needed, we can explore single-master replication, where data is modified on a single write node and replicated to many read nodes.

All in all, the only major drawback is that the entire monolith is replicated when horizontally scaling. This results in a suboptimal usage of server resources, as well as increased scale-out times. For the time being, this is a sound compromise.

## Models

Database models are defined using Python classes that inherit from Django's `models.Model` class.

Models are a collection of fields, where each has a field type and various parameters such as constraints, default values and indexes.

Gridlink allows a user to create many grids, where each grid has many links. Here, we define the grid model with Django:

```python
class Grid(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="grids")
    slug = models.SlugField(unique=True, db_index=True, default=generate_slug)
    title = models.CharField(max_length=128, default="", blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(blank=True, null=True)
    deleted_on = models.DateTimeField(blank=True, null=True)
    is_deleted = models.BooleanField(default=False)
```

## Database

After defining the data models, Django provides two commands to create the necessary database tables and columns.

The `makemigrations` command will generate the migration files that define changes to a database schema. These files are treated as source code and committed to the repository.

Here is the relevant part of the generated migration for creating the grid model:

```python
migrations.CreateModel(
    name="Grid",
    fields=[
        (
            "id",
            models.BigAutoField(
                auto_created=True,
                primary_key=True,
                serialize=False,
                verbose_name="ID",
            ),
        ),
        (
            "slug",
            models.SlugField(default=grids.models.generate_slug, unique=True),
        ),
        ("title", models.CharField(blank=True, default="", max_length=128)),
        ("created_on", models.DateTimeField(auto_now_add=True)),
        ("modified_on", models.DateTimeField(blank=True, null=True)),
        ("deleted_on", models.DateTimeField(blank=True, null=True)),
        ("is_deleted", models.BooleanField(default=False)),
        (
            "user",
            models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ],
)
```

The `migrate` command will search for unapplied migrations in the project, and then apply these changes to a database. By running this command before spinning up the application, the database will always be in-sync with the defined data models.

Django's object-relational mapper (ORM) can be used to perform CRUD (create, read, update, delete) operations on the database. This allows for interaction with the database using Python code, while still maintaining the performance of raw SQL queries.

## API

Django REST framework (`django-rest-framework`) provides a platter of tools and utilities that make it easy to create API endpoints, including serialisers, viewsets and routers. These allow you to create API endpoints by defining the serialisation, queryset and other behaviors in a declarative manner.

First, we create a serialiser class that defines how a data model should be serialised and deserialised. For example, this is a general serialiser for the link model. By default, the grid's primary key will be serialised, but we can switch this out for its slug instead.

```python
class LinkDetailSerialiser(serializers.ModelSerializer):
    grid = serializers.SlugRelatedField(slug_field="slug", read_only=True)

    class Meta:
        model = Link
        fields = "__all__"
```

Once our serialiser is defined, we can use it within a viewset. This is where we write the logic for each HTTP method.

```python
class LinkViewSet(viewsets.ViewSet):
    def create(self, request):
        ...

    def retrieve(self, request, pk=None):
        qs = Link.objects.select_related("grid").all()
        link = get_object_or_404(qs, slug=pk, is_deleted=False)
        serializer = LinkDetailSerialiser(link)
        return Response(serializer.data)

    def list(self, request):
        ...
```

Finally, we can point routes to this viewset.

Since we're using DRF's `viewsets.ViewSet`, requests are already handled appropriately based on method (`GET`, `POST`, etc.) and URL (`/links/` vs. `/links/{id}/`).

```python
links_router = routers.DefaultRouter()
links_router.register(r"links", LinkViewSet, basename="links")
```

Perfect! We can now make calls to our API.

```json
// GET /api/links/li_287df45a6c294bb397a5acd29cdbf63f/

// HTTP 200 OK
// Allow: GET, PUT, PATCH, DELETE, HEAD, OPTIONS
// Content-Type: application/json
// Vary: Accept

{
  "slug": "li_287df45a6c294bb397a5acd29cdbf63f",
  "grid": "gr_58b5fc7e8e854f469192a928518aea5b",
  "title": "Portfolio",
  "background": "/bg/colours.jpg",
  "width": 2,
  "height": 1
  // ...
}
```

### Slugs

Across the API, Gridlink obfuscates the primary keys of objects with slugs to prevent [insecure direct object references](https://wiki.owasp.org/index.php/Top_10_2013-A4-Insecure_Direct_Object_References).

This is to avoid sequential, predictable keys, which are a source of information leakage. We would like to avoid the potential business impacts, such as exposing the total number objects and the rate of their creation, and technical impacts, such as inviting bad actors to iterate over and archive the database (and possibly cause a denial of service).

```json
{ "slug": "gr_58b5fc7e8e854f469192a928518aea5b" }
```

Inspiration for the format was taken from Stripe's [Designing APIs for humans](https://dev.to/stripe/designing-apis-for-humans-object-ids-3o5a) series. Stripe prefixes slugs with model identifiers to prevent human error, both for internal developers and for their customers.

## Authentication

Authentication is the process of identifying, and verifying the identity of, a user. This is initially achieved through the use of a username and password.

To avoid having to store the password and re-send it on every request, which poses an inherent security risk, we can use a token-based system. In short, a token represents the user's credentials, and can be stored and utilised as a guarantee of their identity instead.

We have several token-based solutions available, including:

1. Basic token authentication:
   - One token for all sessions
   - Tracked in the database and can be revoked (forced logout)
   - Does not implicitly store details/permissions and must be looked up
2. JSON Web Token (JWT):
   - One token per session
   - Does not require database storage, and works on an refresh/expire model
   - Includes details/permissions signed by the server (can be trusted)

Several well-maintained packages for dealing with authentication are available. For example, `dj-rest-auth` provides methods and respective endpoints for signing up, logging in, resetting and password and social media authentication.

Once installed, the client can fetch and then send their token in their requests:

```js
headers = {
  Vary: Origin,
  "Access-Control-Allow-Origin": "https://gridl.ink",
  Authorization: "Token " + authtoken + "",
  "X-CSRFToken": csrftoken,
};
```

If a valid token is sent, we'll have access to the user's identity in the `user` attribute of the `request` object. We can thus define the handling of the request accordingly:

```python
def create(self, request):
    # Handle user is not authenticated
    if not request.user.is_authenticated:
        raise PermissionDenied(
            {"message": "You must be logged in to access this resource."}
        )
    # Get grid object from slug
    grid = get_object_or_404(Grid, slug=request.data["grid"], is_deleted=False)
    # Handle grid does not belong to user
    if grid.user != request.user:
        raise PermissionDenied(
            {"message": "You don't have permission to add links to this grid."}
        )
    ...
```

## Optimisation

Django's ORM is incredibly useful, but is has one rule for oerformance and optimisation: **work at the appropriate level**. This means performing operations at the database level, instead of through multiple levels of abstraction and layers of machinery.

This is because SQL is purpose-built for querying and manipulating structured data. Additionally, SQL has built-in aggregation functions that can optimise and even reduce the complexity of operations.

For example, how can we efficiently check the total number of links created?

```python
links = Link.objects.all()

n = len(links)  # O(n) Python operations
n = links.count()  # SQL COUNT() -> O(n) SQL operations, O(1) if row count cached
```

### Indexing

A database index is used to find out where a data row is located in a table. The benefit is that we don't have to scan the entire table when querying on an index.

By default, an auto-incrementing primary key serves as the sole index of a table. An easy way to improve query performance is to index additional columns. For example, in the user table, we can index by username in order to retrieve a user's details by username in O(1) time instead of O(n). Similarly, we can perform a uniqueness check on any indexed field in O(1) time.

A link's slug field is explicitly indexed within its database model:

```python
class Link(models.Model):
    grid = models.ForeignKey(Grid, on_delete=models.CASCADE, related_name="links")
    slug = models.SlugField(
        unique=True, db_index=True, default=generate_slug, editable=False
    )
    ...
```

### Select related

A `JOIN` clause is used to efficiently query data from multiple tables based on a shared column.

When fetching a link, the slug of its grid is returned in the response. However, within the database, the grid's primary key is stored in order to represent that relationship natively. Therefore, we need to query the slug from the grid object.

In order to serialise a list of 27 links **without using an inner join**, we'd need 28 queries. This is why it's often referred to as the N+1 Queries problem.

```sql
1. SELECT "links_link"."id", "links_link"."grid_id", "links_link"."slug" FROM "links_link"

2. SELECT "grids_grid"."id", "grids_grid"."user_id", "grids_grid"."slug",  FROM "grids_grid" WHERE "grids_grid"."id" = 1 LIMIT 21

3. SELECT "grids_grid"."id", "grids_grid"."user_id", "grids_grid"."slug",  FROM "grids_grid" WHERE "grids_grid"."id" = 1 LIMIT 21

...

27. SELECT "grids_grid"."id", "grids_grid"."user_id", "grids_grid"."slug",  FROM "grids_grid" WHERE "grids_grid"."id" = 9 LIMIT 21

28. SELECT "grids_grid"."id", "grids_grid"."user_id", "grids_grid"."slug",  FROM "grids_grid" WHERE "grids_grid"."id" = 9 LIMIT 21
```

Django's ORM provides `select_related()`, which will follow foreign-key relationships and fetch any additional related-object data by creating an SQL join.

```python
def retrieve(self, request, pk=None):
    qs = Link.objects.select_related("grid").all()
    link = get_object_or_404(qs, slug=pk, is_deleted=False)
    ...
```

This turns the 28 queries above into a single, efficient query:

```sql
1. SELECT "links_link"."id", "links_link"."grid_id", "links_link"."slug", "grids_grid"."id", "grids_grid"."slug", FROM "links_link" INNER JOIN "grids_grid" ON ("links_link"."grid_id" = "grids_grid"."id")
```

### Prefetch related

The ORM also provides `prefetch_related()` in order to avoid iterating over a one-to-many relationship.

For example, when fetching a user's profile, Gridlink will serialise all of their grids, and for each grid links, each of its links. For 1 user with 3 grids, where each grid has and 3 links, we'd have a total of 13 queries.

We can reduce the total number of queries by prefetching the respective grids and links:

```python
def retrieve(self, request, pk=None):
    qs = User.objects.prefetch_related("grids__links").all()
    user = get_object_or_404(qs, username=pk)
    ...
```

This results in a single query per model:

```sql
1. SELECT "accounts_user"."id", "accounts_user"."username" FROM "accounts_user" WHERE "accounts_user"."username" = 'test_user_0' LIMIT 21

2. SELECT "grids_grid"."id", "grids_grid"."user_id", "grids_grid"."slug" FROM "grids_grid" WHERE "grids_grid"."user_id" IN (1)

3. SELECT "links_link"."id", "links_link"."grid_id", "links_link"."slug" FROM "links_link" WHERE "links_link"."grid_id" IN (1, 2, 3)
```

## Tests

### Unit tests

### Load testing

Load testing is typically performed on end-to-end infrastructure in order to test the effects of high demand. Gridlink performs load and query testing at the API level. The aim is to make sure that response times aren't creeping up as hundreds of thousands of objects are created.

In general, the cause of bad performance will be inefficient querying (a misused or forgetten `select_related()` or `prefetch_related()`), and its effect will be slower response times as the number of objects grow.

Therefore, we can check these two core characteristics:

```python
def setUpTestData(self):
    # Populate test database with 1,000,000 links
    n_users = 10_000
    n_grids = 10
    n_links = 10
    ...
    self.test_user = User.objects.get(id=495)

def test_user_detail_time(self):
    # Start timer
    tic = time.perf_counter()
    # Serialise a user's profile using exactly 3 queries
    with self.assertNumQueries(3):
        response = self.client.get(
            reverse("users-detail", kwargs={"pk": self.test_user.username})
        )
    # Assert response is < 30ms
    toc = time.perf_counter()
    assert toc - tic < 0.03
```
