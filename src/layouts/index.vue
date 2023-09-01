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
          <!-- <router-view v-slot="{ Component, route }">
            <Transition name="slide-fade" mode="out-in">
              <keep-alive>
                <component :is="Component" :key="getKey(route)" v-if="isRouterAlive" />
              </keep-alive>
            </Transition>
          </router-view> -->
          <router-view v-slot="{ Component, route }">
            <transition name="slide-fade" mode="out-in">
              <keep-alive :max="maxKeepAlivePages" :include="includePages">
                <component :is="Component" :key="route.fullPath" v-if="isRouterAlive" />
              </keep-alive>
            </transition>
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';
import RouterTags from '@/components/router-tags/index.vue';
import LayoutSider from './layout-sider.vue';
import LayoutHeader from './layout-header.vue';
import { nextTick, ref, provide, Transition } from 'vue';
import { useFullHeight } from '@/hooks/useFullHeight';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { useKeepAlivePages } from '@/hooks/useKeepAlivePages';

const { includePages, maxKeepAlivePages, setMaxKeepAlivePages } = useKeepAlivePages();
setMaxKeepAlivePages(10);

const themeModeStore = useThemeMode();
const { mode } = storeToRefs(themeModeStore);

const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide('reload', reload);

const layoutContentRef = ref();
const { height } = useFullHeight(layoutContentRef, 26);

const getKey = (route: RouteLocationNormalizedLoaded): string => {
  const key = route.meta?.keepAlive ? route.path : route.path + '-' + new Date().getTime();
  console.log(route.meta?.keepAlive, key);
  return key;
};
</script>

<style lang="less" scoped>
.layout-content {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: aquamarine;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
