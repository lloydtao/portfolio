<template>
  <div class="container mx-auto px-5">
    <h1 class="mt-5 text-4xl font-black text-gray-100">
      {{ post.title }}
    </h1>
    <p class="mt-3 text-gray-200">
      {{ formatDate(post.publishedAt) }} · {{ post.series }}
    </p>
    <p class="mt-3 text-lg text-gray-200">
      {{ post.description }}
    </p>
    <div
      class="prose prose-sm mx-auto mt-8 overflow-hidden rounded bg-gray-100 md:prose-lg"
    >
      <NuxtContent class="px-8 pb-5" :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
