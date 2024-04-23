<template>
  <div>
    <div class="container p-5 mx-auto">
      <HomeHero />
    </div>
    <div class="bg-gray-800">
      <div class="container p-5 mx-auto">
        <div class="pt-3 pb-5">
          <HomeSkillsHero />
        </div>
      </div>
    </div>
    <div class="container p-5 mx-auto">
      <div class="pt-3 pb-5">
        <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
          Recent posts
        </h1>
        <div class="mt-5">
          <PostsGrid :posts="posts" route="blog-slug" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = await queryContent().sort({ publishedAt: -1 }).find();
</script>
