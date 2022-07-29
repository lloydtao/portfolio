<template>
  <div class="text-gray-50 text-sm font-semibold">
    Lewis Lloyd &copy; {{ date }}
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>

<style></style>
