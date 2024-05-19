<script setup lang="ts">
import Image from './Image.vue';

</script>

<template>
  <div class="flex items-center justify-center w-full h-screen p-20">
    <div class="grid w-full grid-cols-2 gap-8 grid-row-2">
      <Image src="../images/music.gif" alt="Book" class="row-span-2" />
      <Image src="../images/book.gif" alt="Book" class="col-span-1" />
      <Image src="../images/code.gif" alt="Book" />
    </div>
  </div>
</template>