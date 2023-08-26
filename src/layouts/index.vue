<template>
  <a-layout :theme="mode">
    <LayoutHeader />
    <a-layout>
      <LayoutSider :theme="mode" />
      <a-layout style="padding: 0 24px 24px 24px">
        <RouterTags style="margin: 5px 0" />
        <a-layout-content class="layout-content">
          <router-view v-slot="{ Component, route }">
            <keep-alive :max="maxKeepAlivePages" :include="includePages">
              <transition name="fade" mode="out-in">
                <component :is="Component" :key="route.fullPath" v-if="isRouterAlive" />
              </transition>
            </keep-alive>
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';
import { useKeepAlivePages } from '@/hooks/useKeepAlivePages';
import RouterTags from '@/components/router-tags/index.vue';
import LayoutSider from './layout-sider.vue';
import LayoutHeader from './layout-header.vue';
import { nextTick, ref, provide } from 'vue';

const themeModeStore = useThemeMode();
const { mode } = storeToRefs(themeModeStore);

const { includePages, maxKeepAlivePages, setMaxKeepAlivePages } = useKeepAlivePages();
setMaxKeepAlivePages(10);

const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide('reload', reload);
</script>

<style lang="less" scoped>
.layout-content {
  min-height: 240px;
  margin: 0;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.fade-enter-to,
.fade-enter-from {
  transform: translateX(0);
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
</style>
