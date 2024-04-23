<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
  >
    <PostsCard
      v-for="post in props.posts"
      v-show="post.published"
      :key="post.slug"
      :route="props.route"
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

<script setup lang="ts">
const props = defineProps({
  route: { type: String, default: "" },
  posts: { type: Array, default: () => [] },
});
</script>
