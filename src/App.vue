<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { watch } from 'vue';
import { theme } from 'ant-design-vue';
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';
import { useCssVarStore } from '@/stores/cssStore';
import { useLangStore } from '@/stores/lang';
import { useI18n } from 'vue-i18n';
import { usePreferredDark } from '@vueuse/core';

const langStore = useLangStore();
const { lang } = storeToRefs(langStore);

const { locale } = useI18n();
watch(lang, () => {
  locale.value = lang.value;
});

dayjs.locale(lang.value);

const isDark = usePreferredDark();
const themeMode = useThemeMode();
const { mode, isSyncSystem } = storeToRefs(themeMode);
isSyncSystem.value && themeMode.setMode(isDark.value ? 'dark' : 'light');
watch(
  mode,
  () => {
    document.body.setAttribute('mode', mode.value);
  },
  {
    immediate: true
  }
);
watch(
  isSyncSystem,
  () => {
    isDark.value ? themeMode.setMode('dark') : themeMode.setMode('light');
  },
  { immediate: true }
);

const cssVarStore = useCssVarStore();
</script>

<template>
  <a-config-provider
    :locale="lang === 'en' ? enUS : zhCN"
    :theme="{
      algorithm: mode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      token: {
        colorPrimary: cssVarStore.getCssVar('--primary-color') || '#1890ff',
        borderRadius: cssVarStore.getCssVar('--border-radius') || '2px'
      }
    }"
  >
    <main class="AppMain">
      <router-view />
    </main>
  </a-config-provider>
</template>

<style lang="less">
.AppMain {
  width: 100%;
  height: 100vh;
}
</style>
