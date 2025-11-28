<script setup lang="ts">
import { cn } from "@/lib/utils";
import { activeKey, addValueKey, removeValueKey, setActiveValueKey } from "./injections";

const props = defineProps<{
  class?: any;
  value?: string | number;
}>();

const active = inject(activeKey, ref());
const setActiveValue = inject(setActiveValueKey, () => {});

const addValue = inject(addValueKey, () => {});
const removeValue = inject(removeValueKey, () => {});

watch(() => props.value, (value, _oldValue, onCleanup) => {
  if (value) {
    addValue(value);
    onCleanup(() => {
      removeValue(value);
    });
  }
}, { immediate: true });
</script>

<template>
  <div :class="cn('py-1 flex w-full cursor-default select-none transition-300 items-center justify-center z-1', active === value ? 'text-primary' : 'text-muted-foreground', props.class)" @click="() => value && setActiveValue(value)">
    <slot></slot>
  </div>
</template>
