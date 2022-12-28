<template>
  <div>
    <Section>
      <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
        Leetcode
      </h1>
      <h2 class="mt-5 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        Solutions
      </h2>
      <div class="mt-5">
        <PostGridMini :posts="leetcode" route="leetcode-slug" />
      </div>
    </Section>
  </div>
</template>

<script>
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
