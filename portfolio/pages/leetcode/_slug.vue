<template>
  <Post :post="post" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('leetcode', params.slug).fetch()

    return { post }
  },
}
</script>
