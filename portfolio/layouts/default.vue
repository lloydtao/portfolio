<template>
  <div>
    <div class="absolute h-full bg-gradient-to-b from-gray-800 to-gray-900">
      <img
        class="h-full w-auto top-0 -mt-64 md:-mt-48 lg:-mt-16 xl:mt-0"
        src="~/assets/images/bg.svg"
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
