<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { ref } from 'vue';
import { theme } from 'ant-design-vue';
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';
import { useCssVarStore } from '@/stores/cssStore';

dayjs.locale('zh-cn');

const locale = ref(zhCN.locale);

const themeMode = useThemeMode();
const { mode } = storeToRefs(themeMode);

const cssVarStore = useCssVarStore();

// const color = ref();
</script>

<template>
  <a-config-provider
    :locale="locale === 'en' ? enUS : zhCN"
    :theme="{
      algorithm: mode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      token: {
        colorPrimary: cssVarStore.getCssVar('--primary-color') || '#1890ff',
        borderRadius: cssVarStore.getCssVar('--border-radius') || '2px',
      }
    }"
  >
    <main class="AppMain" :mode="mode">
      <!-- <input type="color" v-model="color"> -->
      <router-view />
    </main>
  </a-config-provider>
</template>

<style lang="less"></style>
