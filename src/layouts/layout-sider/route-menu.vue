<template>
  <SiderDom />
</template>

<script setup lang="tsx">
import { LayoutSider, Menu, type SiderProps, type ItemType } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
import menus from '@/router/menus/index';
import type { SelectInfo } from 'ant-design-vue/es/menu/src/interface';
import { useRouter } from 'vue-router';

defineOptions({ name: 'route-menu' });

const props = defineProps<SiderProps & { theme: 'light' | 'dark' }>();

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);
const items = ref<ItemType[]>([]);

const router = useRouter();
const handleSelect = (e: SelectInfo) => {
  // @ts-ignore
  router.push({ name: e.key });
};

const offsetTop = ref(64);

const SiderDom = () => (
  <>
    <LayoutSider
      {...props}
      class={'___layout-sider'}
      style={{
        background: 'var(--primary-background)',
        height: `calc(100vh - ${offsetTop.value}px)`,
        overflowY: 'auto'
      }}
    >
      <Menu
        mode="inline"
        v-model={[selectedKeys.value, 'selectedKeys']}
        openKeys={openKeys.value}
        items={items.value}
        onSelect={(e) => handleSelect(e)}
      ></Menu>
    </LayoutSider>
  </>
);

onMounted(() => {
  items.value = menus as ItemType[];
  const { top } = document.querySelector('.___layout-sider')?.getBoundingClientRect() || { top: 0 };
  offsetTop.value = top;
});
</script>
