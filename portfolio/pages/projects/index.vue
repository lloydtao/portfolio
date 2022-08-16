<template>
  <div>
    <Section>
      <h1 class="text-3xl sm:text-4xl text-gray-100 uppercase font-black">
        Projects
      </h1>
      <p class="text-lg text-gray-300 mt-3">How I've kept myself busy</p>
      <h2 class="text-2xl sm:text-3xl text-gray-200 uppercase font-black mt-5">
        Hackathons
      </h2>
      <div class="mt-5">
        <PostGrid :posts="hackathons" route="projects-slug" />
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProjectPage',
  async asyncData({ $content, params }) {
    const hackathons = await $content('projects')
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
      .where({ series: 'Hackathons' })
      .sortBy('publishedAt', 'desc')
      .fetch()
    return {
      hackathons,
    }
  },
})
</script>
