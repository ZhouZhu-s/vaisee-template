<template>
  <a-layout-sider width="200" :theme="theme">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      :style="{ height: 'calc(100vh - 64px)', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            subnav 1
          </span>
        </template>
        <a-menu-item key="/views/a-tab">
          <router-link to="/views/a-tab">a-tab</router-link>
        </a-menu-item>
        <a-menu-item key="/views/a-v">
          <router-link to="/views/a-v">a-v</router-link>
        </a-menu-item>
        <a-menu-item key="/views/b-v">
          <router-link to="/views/b-v">b-v</router-link>
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
  </a-layout-sider>
</template>

<script setup lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({ name: 'layout-sider' });

defineProps<{
  theme: 'light' | 'dark';
}>();

const route = useRoute();
const selectedKeys = ref<string[]>([route.fullPath]);
const openKeys = ref<string[]>([route.fullPath]);
watchEffect(() => {
  selectedKeys.value = [route.fullPath];
});
</script>
