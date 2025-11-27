<script setup lang="ts">
import type { FloatingIndicatorValue } from "./injections";
import { useMergedState } from "@bernankez/utils/vue";
import { activeKey, addValueKey, removeValueKey, setActiveValueKey } from "./injections";

const data = ref<FloatingIndicatorValue[]>([]);

const uncontrolled = ref<string | number>();
const controlled = defineModel<string | number>();
const active = useMergedState(controlled, uncontrolled);

provide(activeKey, active);
provide(setActiveValueKey, setActiveValue);
provide(addValueKey, addValue);
provide(removeValueKey, removeValue);

function setActiveValue(value: FloatingIndicatorValue) {
  active.value = value;
}

function addValue(value: FloatingIndicatorValue) {
  if (data.value.includes(value)) {
    return;
  }
  data.value.push(value);
}

function removeValue(value: FloatingIndicatorValue) {
  data.value = data.value.filter(item => item !== value);
}

const width = computed(() => `${(100 / (data.value.length || 1))}%`);
const translateX = computed(() => {
  const activeIndex = data.value.findIndex(item => item === active.value) || 0;
  return `${activeIndex * 100}%`;
});
</script>

<template>
  <div class="b-1 b-border rounded-md b-solid bg-muted relative">
    <div class="p-1 rounded-md h-full transition-300 absolute" :style="{ width, transform: `translateX(${translateX})` }">
      <div class="rounded-md bg-background h-full w-full"></div>
    </div>
    <div class="py-2 flex">
      <slot></slot>
    </div>
  </div>
</template>
