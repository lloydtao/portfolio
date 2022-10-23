<template>
  <div>
    <Section>
      <h1 class="text-3xl sm:text-4xl text-gray-100 uppercase font-black">
        Leetcode
      </h1>
      <h2 class="text-2xl sm:text-3xl text-gray-200 uppercase font-black mt-5">
        Solutions
      </h2>
      <div class="mt-5">
        <PostGridMini :posts="leetcode" route="leetcode-slug" />
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LeetcodePage',
  async asyncData({ $content }) {
    const leetcode = await $content('leetcode')
      .only([
        'slug',
        'title',
        'series',
        'publishedAt',
        'published',
      ])
      .sortBy('publishedAt', 'desc')
      .fetch()
    return {
      leetcode,
    }
  },
})
</script>
