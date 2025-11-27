<script setup lang="ts">
const { store } = useColorMode();
const { state } = useCycleList(["auto", "light", "dark"] as const, { initialValue: store });
watchEffect(() => {
  store.value = state.value;
});
</script>

<template>
  <FloatingIndicator v-model="state">
    <FloatingIndicatorItem value="auto" title="System">
      <div class="i-ri:computer-line"></div>
    </FloatingIndicatorItem>
    <FloatingIndicatorItem value="light" title="Light">
      <div class="i-ri:sun-line"></div>
    </FloatingIndicatorItem>
    <FloatingIndicatorItem value="dark" title="Dark">
      <div class="i-ri:moon-line"></div>
    </FloatingIndicatorItem>
  </FloatingIndicator>
</template>
