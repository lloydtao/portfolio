<template>
  <li class="w-full">
    <NuxtLink :to="{ name: props.route, params: { slug: props.slug } }">
      <div
        class="h-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 duration-100"
      >
        <div class="overflow-hidden" style="aspect-ratio: 16 / 9">
          <img
            :src="props.localimage"
            alt="Cover image placeholder"
            class="object-cover w-full"
            width="640"
            height="360"
          />
        </div>
        <div class="py-4">
          <h1 class="px-5 font-semibold text-white">{{ props.title }}</h1>
          <h2 class="px-5 mt-0.5 text-sm text-gray-400">
            {{ formatDate(props.publishedAt) }}
          </h2>
          <p class="overflow-hidden px-5 mt-2 sm:text-sm text-gray-200">
            {{ props.description }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  route: { type: String, default: "page-slug" },
  slug: { type: String, default: "slug" },
  title: { type: String, default: "Title" },
  subtitle: { type: String, default: "Subtitle" },
  series: { type: String, default: "Series" },
  localimage: { type: String, default: "localimage" },
  description: { type: String, default: "Description" },
  publishedAt: { type: String, default: "2000-01-01T00:00:00.000Z" },
});
const formatDate = (date: string) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
</script>
