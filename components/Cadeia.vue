<script setup lang="ts">
import { ref } from 'vue';
import Position from "./Position.vue";

const props = defineProps({
  cadeia: {
    type: String,
    default: "",
  },
})

const cadeia = ref(props.cadeia);
</script>

<template>
  <div class="items-center justify-center flex">
    <Position
      v-for="(char, index) in cadeia"
      :key="index"
      :count="index"
      :string="char"
    />
  </div>
</template>
