<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
})

</script>

<template>
  <div class="relative w-full h-full">
    <img :src="src" :alt="alt" class="object-cover w-full h-full transition-all rounded-lg hover:scale-105" />
    <img :src="src" :alt="alt"
      class="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-20 scale-120 top-1/2 left-1/2 blur-xl -z-10" />
  </div>
</template>