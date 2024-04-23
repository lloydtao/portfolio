<template>
  <div class="flex flex-col sm:pt-5 pb-3 sm:pb-8 mx-auto lg:w-3/4 xl:w-2/3">
    <div class="flex flex-col text-center">
      <div class="mx-auto">
        <img
          class="h-48 sm:h-64 w-48 sm:w-64 rounded-full shadow ring-2 sm:ring-4 ring-gray-200 bg-gray-200 overflow-hidden"
          src="/images/lloyd.jpg"
          width="256"
          height="256"
          alt="Diamond Beach photo in Iceland"
        />
      </div>
      <h1 class="mt-8 text-4xl sm:text-5xl font-black text-gray-100 uppercase">
        Lewis Lloyd
      </h1>
      <p class="mt-3 text-gray-300">yung software engineer &trade;</p>
      <p class="mt-5 text-lg sm:text-xl text-gray-200">
        Specialising in full-stack web applications, data pipelines and cloud
        architecture, with a dash of product management and technical strategy.
      </p>
    </div>
    <div
      class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 sm:mx-auto mt-8"
    >
      <HomeHeroButton
        to="https://github.com/lloydtao"
        class="bg-github-primary hover:bg-github-lighter duration-100"
      >
        <IconsSocialWrapper>
          <IconsSocialGitHub />
        </IconsSocialWrapper>
        <span class="text-xl font-semibold">GitHub</span>
      </HomeHeroButton>
      <HomeHeroButton
        to="https://twitter.com/lloydtao"
        class="bg-twitter-websafe hover:bg-twitter-primary duration-100"
      >
        <IconsSocialWrapper>
          <IconsSocialTwitter />
        </IconsSocialWrapper>
        <span class="text-xl font-semibold">Twitter</span>
      </HomeHeroButton>
      <HomeHeroButton
        to="https://linkedin.com/in/lloydtao"
        class="bg-linkedin-primary hover:bg-linkedin-lighter duration-100"
      >
        <IconsSocialWrapper>
          <IconsSocialLinkedIn />
        </IconsSocialWrapper>
        <span class="text-xl font-semibold">LinkedIn</span>
      </HomeHeroButton>
    </div>
  </div>
</template>
