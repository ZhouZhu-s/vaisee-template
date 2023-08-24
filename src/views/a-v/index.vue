<script setup lang="ts">
import { ref } from 'vue';
import type { ListType } from './types';

defineOptions({ name: 'a-v' });

const list = ref<ListType[]>([]);
const v = ref();
</script>

<template>
  <section class="a-v">
    <input v-model="v" type="text" />
  </section>
</template>

<style lang="less" scoped>
.a-v {
}
</style>
