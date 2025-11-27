<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: any;
}>();

const route = useRoute();
</script>

<template>
  <div :class="cn('px-sm h-full flex items-center justify-between', props.class)">
    <section class="flex gap-sm select-none items-center">
      <div class="text-2xl text-primary-foreground rounded-md bg-primary flex h-10 w-10 items-center justify-center">
        <div class="i-simple-icons:valorant"></div>
      </div>
      <div class="text-2xl text-primary font-[Valorant] flex items-center">
        vALORaNT
      </div>
    </section>
    <section>
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
