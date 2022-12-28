<template>
  <div>
    <Section>
      <Hero />
    </Section>
    <Section class="bg-gray-800">
      <div class="pt-3 pb-5">
        <Skills />
      </div>
    </Section>
    <Section>
      <div class="pt-3 pb-5">
        <h1 class="text-3xl font-black uppercase text-gray-100 sm:text-4xl">
          Recent posts
        </h1>
        <div class="mt-5">
          <PostGrid :posts="blog" route="blog-slug" />
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $content }) {
    const blog = await $content('', { deep: true })
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
      .where({ series: 'Blog' })
      .limit(4)
      .sortBy('publishedAt', 'desc')
      .fetch()
    return {
      blog,
    }
  },
})
</script>
