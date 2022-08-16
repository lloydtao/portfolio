<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
  >
    <PostCard
      v-for="post in posts"
      v-show="post.published"
      :key="post.slug"
      :route="route"
      :slug="post.slug"
      :title="post.title"
      :subtitle="post.subtitle"
      :series="post.series"
      :localimage="post.localimage"
      :description="post.description"
      :published-at="post.publishedAt"
    />
  </ul>
</template>

<script>
export default {
  props: {
    route: { type: String, default: '' },
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
