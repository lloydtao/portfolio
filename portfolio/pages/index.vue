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
        <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
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
    const blog = await $content('blog', { deep: true })
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
      .limit(12)
      .sortBy('publishedAt', 'desc')
      .fetch()
    return {
      blog,
    }
  },
})
</script>
