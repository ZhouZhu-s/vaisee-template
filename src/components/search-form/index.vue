<template>
  <div class="v-search-form">
    <a-row :gutter="16">
      <template v-for="(i, index) in items" :key="i.key + index">
        <a-col v-show="expand || index <= expandNumber" :span="span">
          <div class="item">
            <div :style="{ width: labelWidth, textAlign: labelTextAlign }" class="label">
              {{ i.label }}&nbsp;
            </div>
            <!-- input -->
            <a-input
              v-if="i.type === 'input'"
              v-model:value="i.value"
              :placeholder="i.placeholder"
              :allowClear="true"
              style="width: 100%"
            ></a-input>
            <!-- select -->
            <a-select
              v-if="i.type === 'select'"
              v-model:value="i.value"
              :placeholder="i.placeholder"
              :options="i.options || []"
              :allowClear="true"
              style="width: 100%"
            >
            </a-select>
            <!-- slot -->
            <slot v-if="i.type === 'slot'" :name="i.key" :value="i.value"></slot>
          </div>
        </a-col>
      </template>
      <!-- extra -->
      <a-col :span="extraSpan" :style="{ textAlign: extraTextAlign }">
        <a-button type="primary" @click="onSearch">查询</a-button>
        <a-button style="margin: 0 8px" @click="onReset">重置</a-button>
        <slot name="extra"></slot>
        <a style="font-size: 12px" @click="expand = !expand" v-show="showCollapse">
          <template v-if="expand">
            <UpOutlined />
            折叠
          </template>
          <template v-else>
            <DownOutlined />
            展开
          </template>
        </a>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import type { SearchFormProps, EmitType } from './types';

const expand = ref(false);

const props = withDefaults(defineProps<SearchFormProps>(), {
  expandNumber: 6,
  span: 6,
  extraSpan: 6,
  showCollapse: false,
  labelWidth: '80px',
  labelTextAlign: 'right',
  extraTextAlign: 'left'
});

const emit = defineEmits<EmitType>();

const onSearch = () => {
  const obj: { [key: string]: any } = {};
  props.items.forEach((item) => {
    if (item.type !== 'slot') {
      obj[item.key] = item.value;
    }
  });
  emit('onSearch', obj);
};

const onReset = () => {
  const arr = props.items.map((item) => {
    return {
      ...item,
      value: null
    };
  });
  emit('update:items', arr);
  emit('onReset');
};
</script>

<style lang="less">
.v-search-form {
  width: calc(100% - 10px);
  box-sizing: border-box;
  .item {
    display: flex;
    align-items: center;
    .label {
      color: var(--text-color);
    }
  }
}
</style>
