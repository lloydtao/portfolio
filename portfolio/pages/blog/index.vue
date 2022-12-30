<template>
  <div>
    <Section>
      <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
        Blog
      </h1>
      <h2 class="mt-5 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        General
      </h2>
      <p class="mt-3 text-lg text-gray-300">
        Writings on software engineering and technology
      </p>
      <div class="mt-5">
        <PostGrid :posts="blog" route="blog-slug" />
      </div>
    </Section>
    <Section>
      <h2 class="mt-5 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        Nuxt
      </h2>
      <p class="mt-3 text-lg text-gray-300">The Intuitive Web Framework</p>
      <div class="mt-5">
        <PostGrid :posts="articlesNuxt" route="blog-slug" />
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
    const articlesNuxt = await $content('blog/nuxt')
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
      articlesNuxt,
      blog,
    }
  },
})
</script>
