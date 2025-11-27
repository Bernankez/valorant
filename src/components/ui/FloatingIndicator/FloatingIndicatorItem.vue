<script setup lang="ts">
import { activeKey, addValueKey, removeValueKey, setActiveValueKey } from "./injections";

const props = defineProps<{
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
  <div class="py-1 flex w-full cursor-default select-none transition-300 items-center justify-center z-1" :class="[active === value ? 'text-primary' : 'text-muted-foreground']" @click="() => value && setActiveValue(value)">
    <slot></slot>
  </div>
</template>
