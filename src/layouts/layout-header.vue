<template>
  <header class="layout-header">
    <ThemeSwitch />
  </header>
</template>

<script setup lang="ts">
import ThemeSwitch from '@/components/theme-switch/index.vue'
</script>

<style lang="less" scoped>
.layout-header {
  width: 100%;
  height: 64px;
  background-color: var(--primary-background);
  box-shadow: 0px 1px 6px var(--shadow-color);
  // border-bottom: 1px solid #ffffff;
  position: relative;
  z-index: 1;
}
</style>
