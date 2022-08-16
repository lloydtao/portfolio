<template>
  <div>
    <Section>
      <Hero />
    </Section>
    <Section class="bg-gray-800">
      <div class="py-5">
        <Skills />
      </div>
    </Section>
    <Section class="bg-gray-700">
      <div class="py-5">
        <Hackathon />
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
