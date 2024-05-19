<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  count: {
    default: 0,
  },
  string: {
    type: String,
    default: ' ',
  },
  success: {
    type: Boolean,
    default: false,
  },
  failure: {
    type: Boolean,
    default: false,
  },
  locked: {
    type: Boolean,
    default: false,
  },
})

const counter = ref(props.count);
const string = ref(props.string);
const success = ref(props.success);
const failure = ref(props.failure);
const locked = ref(props.locked);

function handleLeftPointerDown(pointerEvent: PointerEvent) {
  const isCtrl = pointerEvent.ctrlKey;
  const isShift = pointerEvent.shiftKey;
  const isAlt = pointerEvent.altKey;
  const irLeft = pointerEvent.button === 0;

  //if isCtrl, make it green
  if (isCtrl) {
    success.value = true;
    failure.value = false;
    locked.value = false;
    return;
  }

  //if isShift, make it red
  if (isShift) {
    success.value = false;
    failure.value = true;
    locked.value = false;
    return;
  }

  //if isAlt, lock it
  if (isAlt) {
    success.value = false;
    failure.value = false;
    locked.value = true;
    return;
  }

  //if isLeft, reset
  success.value = false;
  failure.value = false;
  locked.value = false;
  return;
}

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
