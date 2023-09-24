<template>
  <a-drawer v-model:open="open" :title="t('settingPanel')" placement="right" @close="handleClose">
    <a-row class="row">
      <a-col :span="8" class="label">{{ t('language') }}</a-col>
      <a-col :span="16">
        <a-select v-model:value="lang" style="width: 100%" @change="onLanguageChange">
          <a-select-option value="zh-cn">中文</a-select-option>
          <a-select-option value="en">English</a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-row class="row">
      <a-col :span="8" class="label">{{ t('themeMode') }}</a-col>
      <a-col :span="16">
        <a-checkbox v-model:checked="themeModeSyncSystem">{{ t('syncSystem') }}</a-checkbox>
      </a-col>
    </a-row>
    <a-row class="row">
      <a-col :span="8" class="label">{{ t('themeMode') }}</a-col>
      <a-col :span="16">
        <ThemeSwitch />
      </a-col>
    </a-row>
    <a-row class="row">
      <a-col :span="8" class="label">{{ t('themeColor') }}</a-col>
      <a-col :span="16">
        <a-input v-model:value="themeColor" type="color"></a-input>
      </a-col>
    </a-row>
    <a-row class="row">
      <a-col :span="8" class="label">{{ t('borderRadius') }}</a-col>
      <a-col :span="16">
        <a-input-number style="width: 100%" v-model:value="borderRadius" :min="0" :max="10" />
      </a-col>
    </a-row>
  </a-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ThemeSwitch from '@/components/theme-switch/index.vue';
import { useLangStore } from '@/stores/lang';
import { useCssVarStore } from '@/stores/cssStore';
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';
import { useDebounceFn } from '@vueuse/core';

defineOptions({ name: 'setting-panel' });

const { t } = useI18n();

const themeModeStore = useThemeMode();
const themeModeSyncSystem = computed({
  get() {
    return themeModeStore.isSyncSystem;
  },
  set(val) {
    themeModeStore.setSyncSystem(val);
  }
});

const langStore = useLangStore();
const { lang } = storeToRefs(langStore);
const onLanguageChange = () => {
  langStore.setLang(lang.value);
};

const emit = defineEmits(['update:visible']);
const props = defineProps({
  visible: {
    type: Boolean
  }
});
const open = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emit('update:visible', val);
  }
});

const handleClose = () => {
  open.value = false;
};

const cssStore = useCssVarStore();
const changeThemeColor = useDebounceFn((val: string) => {
  cssStore.setCssVar('--primary-color', val);
}, 500);
const themeColor = computed({
  get() {
    return cssStore.getCssVar('--primary-color');
  },
  set(val) {
    val && changeThemeColor(val);
  }
});

const borderRadius = computed({
  get() {
    return cssStore.getCssVar('--border-radius')?.split('px')[0] || 2;
  },
  set(val) {
    val && cssStore.setCssVar('--border-radius', val + 'px');
  }
});
</script>

<style lang="less" scoped>
.row {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  .label {
    color: var(--text-color);
  }
}
</style>
