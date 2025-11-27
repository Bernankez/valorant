<script setup lang="ts">
import CrossHairCard from "./components/CrossHairCard.vue";
</script>

<template>
  <div class="flex flex-col gap-sm">
    <section class="flex flex-col gap-sm justify-between sm:flex-row sm:items-center">
      <div class="flex flex-col gap-2">
        <div class="text-2xl text-foreground font-bold">
          My crosshairs
        </div>
        <div class="text-sm text-muted-foreground">
          管理和快速复制你的 Valorant 准星代码
        </div>
      </div>
      <div class="flex gap-2">
        <Button size="sm" variant="outline">
          <div class="i-ri:download-2-line"></div>
          导入
        </Button>
        <Button size="sm" variant="outline">
          <div class="i-ri:upload-2-line"></div>
          导出
        </Button>
        <Button size="sm">
          <div class="i-ri:add-line"></div>
          添加准星
        </Button>
      </div>
    </section>
    <section>
      <div class="p-2 b-1 b-border rounded-md b-solid bg-background flex gap-1 items-center">
        <div class="i-ri:search-line text-muted-foreground"></div>
        <input class="text-sm w-full focus:outline-none" placeholder="搜索准星名称或代码…" />
      </div>
    </section>
    <section class="gap-sm grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
      <CrossHairCard v-for="i in 10" :key="i" />
    </section>
  </div>
</template>
