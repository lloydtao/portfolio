<template>
  <div>
    <h1 class="text-3xl sm:text-4xl font-black text-gray-100 uppercase">
      Contact
    </h1>
    <div class="space-y-3">
      <p class="mt-5 text-gray-300">
        For professional enquiries, connect with me on LinkedIn:
      </p>
      <div
        class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3"
      >
        <HomeHeroButton
          to="https://linkedin.com/in/lloydtao/"
          class="bg-linkedin-primary hover:bg-linkedin-lighter duration-100"
        >
          <IconsSocialWrapper>
            <IconsSocialLinkedIn />
          </IconsSocialWrapper>
          <span class="text-xl font-semibold">LinkedIn</span>
        </HomeHeroButton>
      </div>
    </div>
    <div class="space-y-3">
      <p class="mt-5 text-gray-300">Personal social media:</p>
      <div
        class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3"
      >
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
          to="https://instagram.com/lloydtao"
          class="bg-instagram-primary hover:bg-instagram-lighter duration-100"
        >
          <IconsSocialWrapper>
            <IconsSocialInstagram />
          </IconsSocialWrapper>
          <span class="text-xl font-semibold">Instagram</span>
        </HomeHeroButton>
        <HomeHeroButton
          to="https://open.spotify.com/user/11130532873"
          class="bg-spotify-websafe hover:bg-spotify-lighter duration-100"
        >
          <IconsSocialWrapper>
            <IconsSocialSpotify />
          </IconsSocialWrapper>
          <span class="text-xl font-semibold">Spotify</span>
        </HomeHeroButton>
      </div>
    </div>
    <div class="space-y-3">
      <p class="mt-5 text-gray-300">Nerd stuff:</p>
      <div
        class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3"
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
          to="https://dev.to/tao/"
          class="bg-devto-primary hover:bg-devto-lighter duration-100"
        >
          <IconsSocialWrapper>
            <IconsSocialDevTo />
          </IconsSocialWrapper>
          <span class="text-xl font-semibold">dev.to</span>
        </HomeHeroButton>
      </div>
    </div>
  </div>
</template>
