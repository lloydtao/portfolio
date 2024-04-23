<template>
  <div class="container px-5 mx-auto">
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
      class="overflow-hidden mx-auto mt-8 bg-gray-100 rounded prose prose-sm md:prose-lg"
    >
      <ContentRenderer class="px-8 pb-5" :value="props.post" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    default() {
      return {};
    },
  },
});

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en", options);
};
</script>
