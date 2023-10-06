<template>
  <Menu
    mode="inline"
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    :style="{ height: 'calc(100vh - 64px)', borderRight: 0, maxWidth: '200px', overflow: 'auto' }"
    :items="items"
    :inlineCollapsed="collapsed"
    @select="handleSelect"
  ></Menu>
</template>

<script setup lang="ts">
import { Menu, type ItemType } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
import type { SelectInfo } from 'ant-design-vue/es/menu/src/interface';
import { useRouter, useRoute } from 'vue-router';
import menus from '@/router/menus';
import setting from '@/settings/projectSetting';

defineOptions({ name: 'route-menu' });

const collapsed = ref(false);
const openKeys = ref<string[]>([setting?.preOpenKeyOfMenu || '']);
const items = ref<ItemType[]>(menus as unknown as ItemType[]);

const route = useRoute();
const selectedKeys = ref<string[]>([route?.name?.toString() || '']);

const router = useRouter();
const handleSelect = (e: SelectInfo) => {
  // @ts-ignore
  router.push({ name: e.key });
};

onMounted(() => {});
</script>
