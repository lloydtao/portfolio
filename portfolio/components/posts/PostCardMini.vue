<template>
  <li class="w-full">
    <NuxtLink :to="{ name: route, params: { slug: slug } }">
      <div
        class="py-3 h-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 duration-100"
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
