<template>
  <a-layout :theme="mode">
    <LayoutHeader />
    <main style="display: flex;">
      <RouteMenu :theme="mode" v-if="AppSetting.useRouteMenu" />
      <Menu :theme="mode" v-else />
      <a-layout style="padding: 0 24px 24px 24px; box-sizing: border-box; width: 100%;">
        <RouterTags />
        <a-layout-content
          class="layout-content"
          ref="layoutContentRef"
          :style="{ height: height + 'px' }"
        >
          <router-view v-slot="{ Component, route }">
            <transition name="slide-fade" mode="out-in">
              <keep-alive :max="maxKeepAlivePages" :include="includePages">
                <component :is="Component" :key="route.fullPath" v-if="isRouterAlive" />
              </keep-alive>
            </transition>
          </router-view>
        </a-layout-content>
      </a-layout>
    </main>
  </a-layout>
</template>

<script lang="ts" setup>
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';
import RouterTags from '@/components/router-tags/index.vue';
import RouteMenu from './layout-sider/route-menu.vue';
import Menu from './layout-sider/menu.vue';
import LayoutHeader from './layout-header.vue';
import { nextTick, ref, provide } from 'vue';
import { useFullHeight } from '@/hooks/useFullHeight';
import { useKeepAlivePages } from '@/hooks/useKeepAlivePages';
import AppSetting from '@/settings/projectSetting';

defineOptions({ name: 'layout-index' });

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
</script>

<style lang="less" scoped>
.layout-content {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  overflow-y: auto;
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
