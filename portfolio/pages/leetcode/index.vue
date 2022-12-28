<template>
  <div>
    <Section>
      <h1 class="text-3xl font-black uppercase text-gray-100 sm:text-4xl">
        Leetcode
      </h1>
      <h2 class="mt-5 text-2xl font-black uppercase text-gray-200 sm:text-3xl">
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
      .only(['slug', 'title', 'series', 'publishedAt', 'published'])
      .sortBy('publishedAt', 'desc')
      .fetch()
    return {
      leetcode,
    }
  },
})
</script>
