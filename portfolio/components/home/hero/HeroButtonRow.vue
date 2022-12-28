<template>
  <div class="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
    <HeroButton
      href="https://github.com/LloydTao"
      class="bg-github-primary duration-100 hover:bg-github-lighter"
    >
      <IconWrapper>
        <GitHub />
      </IconWrapper>
      <span class="text-xl font-semibold">GitHub</span>
    </HeroButton>
    <HeroButton
      href="https://twitter.com/LloydTao"
      class="bg-twitter-websafe duration-100 hover:bg-twitter-primary"
    >
      <IconWrapper>
        <Twitter />
      </IconWrapper>
      <span class="text-xl font-semibold">Twitter</span>
    </HeroButton>
  </div>
</template>
