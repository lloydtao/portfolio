<template>
  <div>
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
