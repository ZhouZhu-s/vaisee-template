<template>
  <a-layout :theme="mode">
    <LayoutHeader />
    <a-layout>
      <LayoutSider :theme="mode" />
      <a-layout style="padding: 0 24px 24px 24px; box-sizing: border-box">
        <RouterTags />
        <a-layout-content
          class="layout-content"
          ref="layoutContentRef"
          :style="{ height: height + 'px' }"
        >
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
import { useFullHeight } from '@/hooks/useFullHeight';

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

const layoutContentRef = ref();
const { height } = useFullHeight(layoutContentRef, 24);
</script>

<style lang="less" scoped>
.layout-content {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: aquamarine;
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
