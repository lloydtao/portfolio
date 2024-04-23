<template>
  <div>
    <div class="container p-5 mx-auto">
      <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
        Blog
      </h1>
      <h2 class="mt-5 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        General
      </h2>
      <p class="mt-3 text-lg text-gray-300">
        Writings on software engineering and technology
      </p>
      <div class="mt-5">
        <PostsGrid :posts="postsBlog" route="blog-slug" />
      </div>
    </div>
    <div class="container p-5 mx-auto">
      <h2 class="mt-5 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        Nuxt
      </h2>
      <p class="mt-3 text-lg text-gray-300">The Intuitive Web Framework</p>
      <div class="mt-5">
        <PostsGrid :posts="postsNuxt" route="blog-slug" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const postsBlog = await queryContent("blog", "general")
  .sort({ publishedAt: -1 })
  .find();
const postsNuxt = await queryContent("blog", "nuxt")
  .sort({ publishedAt: -1 })
  .find();
</script>
