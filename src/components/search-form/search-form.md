

# search-form

### types

```typescript
type FormItemType = 'input' | 'select' | 'slot';

export interface SearchFormItem {
  type: FormItemType;
  label: string;
  key: string;
  value: unknown;
  placeholder?: string;
  options?: { label: string; value: unknown }[];
}
```

### props

可参考 ant-design-vue 表单-高级搜索。 https://antdv.com/components/form-cn#components-form-demo-advanced-search

| 属性             | 说明          | 类型                        | 是否必填    | 默认值     |
| -------------- | ----------- | ------------------------- | ------- | ------- |
| expandNumber   | 多少item开始折叠  | `number`                  | `false` | 6       |
| span           | span        | `number`                  | `false` | 6       |
| extraSpan      | `slot` span | `number`                  | `false` | 6       |
| showCollapse   | 显示折叠按钮      | `boolean`                 | `false` | `false` |
| labelWidth     | 文字宽度        | `string`                  | `false` | `80px`  |
| labelTextAlign | 文字排列        | `left`\|`right`\|`center` | `false` | `right` |
| extraTextAlign | 功能区排列       | `left`\|`right`\|`center` | `false` | `left`  |
| items          | 查询项         | `SearchFormItem[]`        | `true`  | -       |

### 事件

| 事件名称     | 说明    | 回调参数                                  |
| -------- | ----- | ------------------------------------- |
| onSearch | 查询时触发 | `(data: Record<string, any>) => void` |
| onReset  | 重置时触发 | `() => void`                          |

### 插槽

| 名称                      | 说明                                        |
| ----------------------- | ----------------------------------------- |
| extra                   | 功能区域插槽                                    |
| `SearchFormItem['key']` | item插槽，需`SearchFormItem['type'] = 'slot'` |

### 示例

index.vue

```
<script setup lang="ts">
import SearchForm from '@/components/search-form/index.vue';
import { SearchList, columns } from './const.data';

const searchList = ref(SearchList);
const onSearch = (data: any) => {
  console.log(data);
};
const onReset = () => {
  console.log('reset');
};

</script>

<template>
  <main>
    <header class="search">
      <SearchForm v-model:items="searchList" @on-search="onSearch" @on-reset="onReset">
        <template #time>
          <a-range-picker />
        </template>
      </SearchForm>
    </header>
  </main>
</template>

<style lang="less" scoped></style>

```

const.data.ts

```typescript
import type { SearchFormItem } from '@/components/search-form/types';
import type { ColumnProps } from 'ant-design-vue/lib/table';

export const SearchList: SearchFormItem[] = [
  {
    type: 'input',
    label: '姓名',
    key: 'name',
    value: null
  },
  {
    type: 'select',
    label: '年龄',
    key: 'age',
    value: null,
    options: [
      {
        label: '1',
        value: 1
      }
    ]
  },
  {
    type: 'slot',
    label: '时间',
    key: 'time',
    value: null,
  }
];

```
