<template>
  <div>
    <div class="absolute h-full">
      <image-safe
        class="top-0"
        src="/images/bg.svg"
        width="1920"
        height="1080"
        alt="Blue and purple background graphics"
      />
    </div>
    <div class="absolute h-full w-full top-0">
      <div>
        <Section>
          <Navbar />
        </Section>
        <Nuxt />
        <Section>
          <Footer />
        </Section>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-900;
}
</style>
