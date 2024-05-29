<script setup lang="ts">
import { ref } from 'vue';
import Position from "./Position.vue";

const props = defineProps({
  cadeia: {
    type: String,
    default: "",
  },
  start: {
    type: Number,
    default: 0,
  },
})

const cadeia = ref(props.cadeia);
const start = ref(props.start);
</script>

<template>
  <div class="flex items-center justify-center py-4">
    <Write v-for="(char, index) in cadeia" :key="index" :count="start + index" :string="char" />
  </div>
</template>
