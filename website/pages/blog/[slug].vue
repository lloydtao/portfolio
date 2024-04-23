<template>
  <PostsRender :post="post" />
</template>

<script setup lang="ts">
const route = useRoute();
const post = await queryContent().where({ slug: route.params.slug }).findOne();
</script>
