<script setup lang="ts">
import CrossHairCard from "./components/CrossHairCard.vue";
</script>

<template>
  <div class="flex flex-col gap-sm">
    <section class="flex flex-col gap-sm justify-between sm:flex-row sm:items-center">
      <div class="flex flex-col gap-2">
        <div class="text-2xl text-foreground font-bold">
          Crosshairs
        </div>
        <div class="text-sm text-muted-foreground">
          Manage and quickly copy your Valorant crosshair codes
        </div>
      </div>
      <div class="flex gap-2">
        <Button size="sm" variant="outline">
          <div class="i-ri:download-2-line"></div>
          Import
        </Button>
        <Button size="sm" variant="outline">
          <div class="i-ri:upload-2-line"></div>
          Export
        </Button>
        <Button size="sm">
          <div class="i-ri:add-line"></div>
          Add Crosshair
        </Button>
      </div>
    </section>
    <section>
      <div class="p-2 b-1 b-border rounded-md b-solid bg-background flex gap-1 items-center">
        <div class="i-ri:search-line text-muted-foreground"></div>
        <input class="text-sm w-full focus:outline-none" placeholder="Search by name or code…" />
      </div>
    </section>
    <section class="gap-sm grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
      <CrossHairCard v-for="i in 10" :key="i" />
    </section>
  </div>
</template>
