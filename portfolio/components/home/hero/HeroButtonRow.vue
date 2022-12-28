<template>
  <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
    <HeroButton
      href="https://github.com/LloydTao"
      class="bg-github-primary hover:bg-github-lighter duration-100"
    >
      <IconWrapper>
        <GitHub />
      </IconWrapper>
      <span class="text-xl font-semibold">GitHub</span>
    </HeroButton>
    <HeroButton
      href="https://twitter.com/LloydTao"
      class="bg-twitter-websafe hover:bg-twitter-primary duration-100"
    >
      <IconWrapper>
        <Twitter />
      </IconWrapper>
      <span class="text-xl font-semibold">Twitter</span>
    </HeroButton>
  </div>
</template>
