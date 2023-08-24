<script setup lang="ts">
import { ref } from 'vue';
import type { ListType } from './types';

defineOptions({ name: 'bbbbb-v', });

const list = ref<ListType[]>([]);
const v = ref();
</script>

<template>
  <section class="b-v">
    <input v-model="v" type="text" /> 
  </section>
</template>

<style lang="less" scoped>
.b-v {}
</style>