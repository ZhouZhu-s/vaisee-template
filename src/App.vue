<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { computed, watch } from 'vue';
import { theme } from 'ant-design-vue';
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';
import { useCssVarStore } from '@/stores/cssStore';
import RouterTags from '@/components/router-tags/index.vue';
import { useKeepAlivePages } from '@/hooks/useKeepAlivePages';
import { useLangStore } from '@/stores/lang';
import { useI18n } from 'vue-i18n';

const langStore = useLangStore();
const { lang } = storeToRefs(langStore);

const { locale } = useI18n();
watch(lang, () => {
  locale.value = lang.value;
});

dayjs.locale(lang.value);

const checked = computed({
  get() {
    return lang.value === 'en';
  },
  set() {
    langStore.toggleLang();
  }
});

const themeMode = useThemeMode();
const { mode } = storeToRefs(themeMode);

const cssVarStore = useCssVarStore();

const { includePages, maxKeepAlivePages, setMaxKeepAlivePages } = useKeepAlivePages();
setMaxKeepAlivePages(10);
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
    <main class="AppMain" :mode="mode">
      <a-switch v-model:checked="checked" />
      <!-- <input type="color" v-model="color"> -->
      <router-link to="/a-v">a-v</router-link>
      <router-link to="/b-v">b-v</router-link>
      <RouterTags></RouterTags>
      <router-view v-slot="{ Component, route }">
        <keep-alive :max="maxKeepAlivePages" :include="includePages">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </router-view>
    </main>
  </a-config-provider>
</template>

<style lang="less"></style>
