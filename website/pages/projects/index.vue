<template>
  <div>
    <div class="container p-5 mx-auto">
      <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
        Projects
      </h1>
      <p class="mt-3 text-lg text-gray-300">How I've kept myself busy</p>
      <h2 class="mt-5 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        Gridlink
      </h2>
      <p class="mt-3 text-lg text-gray-300">
        My journey in building a production-ready web application
      </p>
      <div class="mt-5">
        <PostsGrid :posts="postsGridlink" route="projects-slug" />
      </div>
    </div>
    <div class="container p-5 mx-auto">
      <h2 class="mt-8 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        Hackathons
      </h2>
      <p class="mt-3 text-lg text-gray-300">
        Rapid and collaborative engineering challenges
      </p>
      <div class="mt-5">
        <PostsGrid :posts="postsHackathons" route="projects-slug" />
      </div>
    </div>
    <div class="container p-5 mx-auto">
      <h2 class="mt-8 text-2xl sm:text-3xl font-black text-gray-200 uppercase">
        Personal
      </h2>
      <p class="mt-3 text-lg text-gray-300">
        Projects for skill building and technical exploration
      </p>
      <div class="mt-5">
        <PostsGrid :posts="postsPersonal" route="projects-slug" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const postsGridlink = await queryContent("projects", "gridlink")
  .sort({ publishedAt: -1 })
  .find();
const postsHackathons = await queryContent("projects", "hackathons")
  .sort({ publishedAt: -1 })
  .find();
const postsPersonal = await queryContent("projects", "personal")
  .sort({ publishedAt: -1 })
  .find();
</script>
