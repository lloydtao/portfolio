<template>
  <div class="text-sm font-semibold text-gray-50">
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
