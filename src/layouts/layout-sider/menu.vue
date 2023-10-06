<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    :style="{ height: 'calc(100vh - 64px)', borderRight: 0 }"
    :inline-collapsed="collapsed"
  >
    <a-sub-menu key="sub1">
      <template #icon>
        <code-sandbox-outlined />
      </template>
      <template #title>
        {{ t('threeJsDemo') }}
      </template>
      <a-menu-item key="/views/three/electronic-fence">
        <router-link to="/views/three/electronic-fence">{{ t('electronicFence') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/light-line-fence">
        <router-link to="/views/three/light-line-fence">{{ t('lightLineFence') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/radar-scan">
        <router-link to="/views/three/radar-scan">{{ t('radarScan') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/fire">
        <router-link to="/views/three/fire">{{ t('fire') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/smoke">
        <router-link to="/views/three/smoke">{{ t('smoke') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/snow">
        <router-link to="/views/three/snow">{{ t('snow') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/video">
        <router-link to="/views/three/video">{{ t('video') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/three-web">
        <router-link to="/views/three/three-web">{{ t('threeDimensionalWeb') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/water">
        <router-link to="/views/three/water">{{ t('seawater') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/drag-object">
        <router-link to="/views/three/drag-object">{{ t('dragObject') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/bloom-effect">
        <router-link to="/views/three/bloom-effect">{{ t('bloomEffect') }}</router-link>
      </a-menu-item>
      <a-menu-item key="/views/three/collision-detection">
        <router-link to="/views/three/collision-detection">{{
          t('collisionDetection')
        }}</router-link>
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="sub2">
      <template #title>
        <span>
          <laptop-outlined />
          subnav 2
        </span>
      </template>
      <a-menu-item key="5">option5</a-menu-item>
      <a-menu-item key="6">option6</a-menu-item>
      <a-menu-item key="7">option7</a-menu-item>
      <a-menu-item key="8">option8</a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="sub3">
      <template #title>
        <span>
          <notification-outlined />
          subnav 3
        </span>
      </template>
      <a-menu-item key="9">option9</a-menu-item>
      <a-menu-item key="10">option10</a-menu-item>
      <a-menu-item key="11">option11</a-menu-item>
      <a-menu-item key="12">option12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
import { CodeSandboxOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineOptions({ name: 'layout-menu' });

defineProps<{
  theme: 'light' | 'dark';
}>();

const route = useRoute();
const selectedKeys = ref<string[]>([route.fullPath]);
const openKeys = ref<string[]>([]);

const collapsed = ref(true);
</script>

<style lang="less" scoped>
.layout-sider {
  height: calc(100vh - 64px);
  overflow-y: auto;
  background-color: var(--primary-background);
}
</style>
