<template>
  <div>
    <div class="absolute w-full h-full">
      <img
        class="top-0 w-full"
        src="/images/bg.svg"
        width="1920"
        height="1080"
        alt="Blue and purple background graphics"
      />
    </div>
    <div class="absolute top-0 w-full h-full">
      <div>
        <Section>
          <Navbar />
        </Section>
        <Nuxt />
        <Section class="py-2">
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
