<template>
  <li class="w-full">
    <NuxtLink :to="{ name: route, params: { slug: slug } }">
      <div
        class="h-full border border-gray-600 bg-gray-800 py-3 duration-100 hover:border-gray-500 hover:bg-gray-700"
      >
        <h1 class="px-5 font-semibold text-white">{{ title }}</h1>
        <h2 class="px-5 text-sm text-gray-300">
          {{ formatDate(publishedAt) }} · {{ series }}
        </h2>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    route: { type: String, default: 'page-slug' },
    slug: { type: String, default: 'slug' },
    title: { type: String, default: 'Title' },
    series: { type: String, default: 'Series' },
    publishedAt: { type: String, default: '2000-01-01T00:00:00.000Z' },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
