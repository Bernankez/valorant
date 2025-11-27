<script setup lang="ts">

</script>

<template>
  <div class="b-1 b-border rounded-md b-solid bg-card shadow-sm">
    <div class="bg-muted">
      img
    </div>
    <div class="p-sm">
      <div>
        <div>name</div>
        <div>code</div>
        <div>tags</div>
      </div>
      <div class="flex gap-sm">
        <Button variant="secondary" size="sm" class="w-full">
          <div class="i-ri:file-copy-line"></div>
          复制代码
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button size="icon-sm" class="shrink-0" variant="secondary">
              <div class="i-ri:more-line"></div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <div class="i-ri:pencil-line"></div>
              编辑
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div class="i-ri:delete-bin-line"></div>
              <span class="text-error">
                删除
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</template>
