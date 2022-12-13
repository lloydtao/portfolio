---
slug: 'gridlink-building-a-scalable-backend'
title: 'Building a scalable backend'
subtitle: ''
series: 'Gridlink'
description: 'Building a database and REST API using Django and PostgreSQL'
localimage: '/images/django-postgres.png'
publishedAt: '2022-12-03T09:00:00.000Z'
tags: ''
published: true
---

## Introduction

Django is a framework for building monolithic web applications.

Although not typically associated with performance at scale, a monolith can be feasible if it is kept **stateless** and **modular**.

- Statelessness, where an application server is dependent only on third-party storage, allows us to leverage horizontal scaling. This is the usage of parallel servers to distribute load across multiple nodes.
- Modularity will allow us to easily migrate to a microservices architecture in the future. Django already encourages breaking a project into 'apps', where each app has its own data models, routes, views and tests.

The nodes can share a remote data asset as a single point of truth, such as a Postgres database. Postgres itself is able to partially achieve horizontal scaling by clustering via single-master replication.

All in all, the only major drawback is that the entire monolith is replicated when scaling, instead of individual services. This isn't an optimal usage of server resources, but it isn't detrimental either.

## Models

Database models are defined using Python classes that inherit from Django's `models.Model` class.

Models are a collection of fields, where each has a field type and various parameters such as constraints and indexes.

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

After defining model classes, Django provides two commands to create the necessary database tables and columns.

The `makemigrations` command will generate the migration files that define changes to a database schema. These files are treated as source code and committed to the repository.

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

The `migrate` command will apply these changes to a database. This command should ideally be run before the application starts up.

Django's object-relational mapper (ORM) can be used to perform CRUD (create, read, update, delete) operations on the database. This allows for interaction with the database using Python code rather than writing raw SQL queries.

## API

[ Using django-rest-framework to create API endpoints ]

## Authentication

[ Providing an authentication token and securing endpoints ]

## Scalability

[ Using `db_index`, `select_related` and `prefetch_related` for optimisation ]

## Tests

[ Unit testing and load testing for security and scalability ]
