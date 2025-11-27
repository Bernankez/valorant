<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: any;
}>();
</script>

<template>
  <div :class="cn('background opacity-5 pointer-events-none inset-0 fixed', props.class)"></div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(oklch(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--muted-foreground)) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
