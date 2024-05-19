<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  pattern: {
    type: String,
    default: "",
  },
});

const pattern = ref(props.pattern);

</script>

<template>
  <div class="flex items-center justify-center">
    <button class="flex flex-col items-center justify-center outline-none" @pointerdown="handleLeftPointerDown">
      <div class="w-8">
        <span class="font-mono text-xs text-neutral-300">{{ counter }}</span>
      </div>
      <div
        class="size-8 border bg-neutral-200 border-neutral-600/30 data-[success=true]:bg-emerald-200 data-[failure=true]:bg-rose-200 transition-all duration-300 ease-in-out data-[success=true]:border-emerald-600/30 data-[failure=true]:border-rose-600/30 data-[locked=true]:bg-neutral-400 data-[locked=true]:border-neutral-800 flex justify-center items-center rounded"
        :data-success="success" :data-failure="failure" :data-locked="locked">
        <span class="text-lg font-bold text-neutral-800">{{ string }}</span>
      </div>
    </button>
  </div>
</template>