<script setup lang="ts">
import Background from "./Background.vue";
import Header from "./Header.vue";
</script>

<template>
  <Background class="-z-1" />
  <div class="pt-16">
    <header class="b-0 b-b-1 b-border b-solid bg-background h-16 w-full left-0 top-0 fixed z-50">
      <Header class="mx-auto max-w-screen-xl" />
    </header>
    <main>
      <div class="mx-auto p-sm max-w-screen-xl">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
