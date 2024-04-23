<template>
  <div>
    <div class="absolute w-full h-full">
      <img
        class="top-0 w-full"
        src="/images/bg.svg"
        width="1920"
        height="1080"
        alt="Blue and purple background graphics"
      >
    </div>
    <div class="absolute top-0 w-full h-full">
      <div>
        <div class="container p-5 mx-auto">
          <NavigationBar />
        </div>
        <NuxtPage />
        <div class="container px-5 py-8 mx-auto">
          <FooterBar />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: rgb(17, 24, 39);
  overflow-y: scroll;
}
</style>
