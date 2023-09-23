<template>
  <header class="layout-header">
    <div class="logo">My Web</div>
    <SettingOutlined :class="['icon', { 'rotate-180': isClick }]" @click="handleClick" />
    <SettingPanel v-model:visible="visible" />
  </header>
</template>

<script setup lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import SettingPanel from '@/components/setting-panel/index.vue';

const visible = ref(false);

const isClick = ref(false);
const handleClick = () => {
  isClick.value = true;
  setTimeout(() => {
    visible.value = true;
    isClick.value = false;
  }, 300);
};
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: var(--primary-background);
  box-shadow: 0px 1px 6px var(--shadow-color);
  position: relative;
  z-index: 1;
  color: var(--text-color);
  padding: 0 24px;
  .logo {
    font-size: 24px;
  }
  .icon {
    cursor: pointer;
  }
  .rotate-180 {
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;
  }
}
</style>
