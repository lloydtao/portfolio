<template>
  <div>
    <h1 class="text-3xl font-black uppercase text-gray-100 sm:text-4xl">
      Contact
    </h1>
    <div class="space-y-3">
      <p class="mt-5 text-gray-300">
        For professional enquiries, connect with me on LinkedIn:
      </p>
      <div
        class="flex flex-col space-x-0 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0"
      >
        <HeroButton
          href="https://linkedin.com/in/lloydtao/"
          class="bg-linkedin-primary duration-100 hover:bg-linkedin-lighter"
        >
          <IconWrapper>
            <LinkedIn />
          </IconWrapper>
          <span class="text-xl font-semibold">LinkedIn</span>
        </HeroButton>
      </div>
    </div>
    <div class="space-y-3">
      <p class="mt-5 text-gray-300">Personal social media:</p>
      <div
        class="flex flex-col space-x-0 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0"
      >
        <HeroButton
          href="https://twitter.com/lloydtao"
          class="bg-twitter-websafe duration-100 hover:bg-twitter-primary"
        >
          <IconWrapper>
            <Twitter />
          </IconWrapper>
          <span class="text-xl font-semibold">Twitter</span>
        </HeroButton>
        <HeroButton
          href="https://instagram.com/lloydtao"
          class="bg-instagram-primary duration-100 hover:bg-instagram-lighter"
        >
          <IconWrapper>
            <Instagram />
          </IconWrapper>
          <span class="text-xl font-semibold">Instagram</span>
        </HeroButton>
        <HeroButton
          href="https://open.spotify.com/user/11130532873"
          class="bg-spotify-websafe duration-100 hover:bg-spotify-lighter"
        >
          <IconWrapper>
            <Spotify />
          </IconWrapper>
          <span class="text-xl font-semibold">Spotify</span>
        </HeroButton>
      </div>
    </div>
    <div class="space-y-3">
      <p class="mt-5 text-gray-300">Nerd stuff:</p>
      <div
        class="flex flex-col space-x-0 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0"
      >
        <HeroButton
          href="https://github.com/lloydtao"
          class="bg-github-primary duration-100 hover:bg-github-lighter"
        >
          <IconWrapper>
            <GitHub />
          </IconWrapper>
          <span class="text-xl font-semibold">GitHub</span>
        </HeroButton>
        <HeroButton
          href="https://dev.to/tao/"
          class="bg-devto-primary duration-100 hover:bg-devto-lighter"
        >
          <IconWrapper>
            <DevTo />
          </IconWrapper>
          <span class="text-xl font-semibold">dev.to</span>
        </HeroButton>
      </div>
    </div>
  </div>
</template>
