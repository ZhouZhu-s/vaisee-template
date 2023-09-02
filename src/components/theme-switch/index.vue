<script setup lang="ts">
import { computed } from 'vue';
import { useThemeMode } from '@/stores/themeMode';
import { storeToRefs } from 'pinia';

defineOptions({ name: 'theme-switch' });

const themeModeStore = useThemeMode();
const { mode, isSyncSystem } = storeToRefs(themeModeStore);

const checked = computed({
  get() {
    return mode.value === 'light';
  },
  set() {
    themeModeStore.toggleMode();
  }
});
</script>

<template>
  <a-switch v-model:checked="checked" :disabled="isSyncSystem">
    <template #checkedChildren>
      <img src="@/assets/svg/moon.svg" :style="{ marginTop: '2.5px' }" />
    </template>
    <template #unCheckedChildren>
      <img src="@/assets/svg/sun.svg" />
    </template>
  </a-switch>
</template>