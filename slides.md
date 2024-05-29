---
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /images/processamento-de-cadeias.gif
# some information about your slides, markdown enabled
title: Processamento de cadeias
info: |
  ## Casamento, Compressão e análise
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
# layout: intro-image
# image: /images/processamento-de-cadeias.gif
---

<div class="absolute top-0 left-0 flex items-center justify-center w-full h-full -z-10">
<img
  src="/images/processamento-de-cadeias.gif" 
  alt=""
  class="object-cover w-full h-full scale-105"
/>
<!-- <div class="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70"/> -->
</div>

<div class="w-full flex justify-center items-center">
<div class="px-4 pt-2 rounded-lg bg-black/50 backdrop-blur-8 flex flex-col justify-center items-center text-white z-10 w-fit">
<h1>Processamento de Cadeias</h1>
<p>Casamento, Compressão e Análise</p>
</div>
</div>

<div class="absolute z-10 flex flex-row items-center gap-4 p-2 text-white rounded-lg bottom-10 bg-black/50 backdrop-blur-8">
  <img src="https://github.com/tamicktom.png" alt="Github" class="transition-all rounded-full hover:shadow-lg size-12 hover:scale-105" />
  <span class="font-700">
    Henrique Ângelo V. Fonseca, 2024
  </span>
</div>



<img 
  src="/images/logo-unesp.jpg" 
  alt="" 
  class="w-full absolute bottom-10 right-10 max-w-[128px] overflow-hidden rounded-lg bg-white p-2 z-10"
/>

---
src: ./pages/conteudo.md
hide: false
---

---
src: ./pages/introducao.md
hide: false
---

---
src: ./pages/casamento/index.md
hide: false
---

---
src: ./pages/compressao/index.md
hide: false
---

---
src: ./pages/analise/index.md
hide: false
---

---
src: ./pages/conclusao.md
hide: false
---