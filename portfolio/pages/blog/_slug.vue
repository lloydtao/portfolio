<template>
  <Post :post="post" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const query = await $content('blog', { deep: true })
      .where({ slug: params.slug })
      .fetch()
    const post = query[0]
    return { post }
  },
}
</script>
