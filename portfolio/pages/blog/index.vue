<template>
  <div>
    <Section>
      <h1 class="text-3xl font-black uppercase text-gray-100 sm:text-4xl">
        Blog
      </h1>
      <p class="mt-3 text-lg text-gray-300">How I've kept myself busy</p>
      <div class="mt-5">
        <PostGrid :posts="blog" route="blog-slug" />
      </div>
    </Section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'BlogPage',
  async asyncData({ $content }) {
    const blog = await $content('blog')
      .only([
        'slug',
        'title',
        'subtitle',
        'description',
        'series',
        'localimage',
        'publishedAt',
        'published',
      ])
      .sortBy('publishedAt', 'desc')
      .fetch()
    return {
      blog,
    }
  },
})
</script>
