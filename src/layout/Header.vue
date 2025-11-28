<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: any;
}>();

const route = useRoute();
</script>

<template>
  <div :class="cn('relative px-sm h-full flex items-center justify-between', props.class)">
    <section class="flex gap-sm select-none items-center">
      <div class="text-2xl text-primary-foreground rounded-md bg-primary flex h-10 w-10 items-center justify-center">
        <div class="i-simple-icons:valorant"></div>
      </div>
      <div class="text-2xl text-primary font-[Valorant] hidden items-center sm:flex">
        vALORaNT
      </div>
    </section>
    <section class="left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2">
      <ButtonGroup>
        <Button class="uppercase" :variant="route.path === '/crosshair' ? 'default' : 'ghost'">
          crosshair
        </Button>
      </ButtonGroup>
    </section>
    <section class="w-32">
      <ThemeSwitch />
    </section>
  </div>
</template>
