<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRouterTags, type RouterTag } from '@/stores/routerTags';
import { useCssVarStore } from '@/stores/cssStore';
import { storeToRefs } from 'pinia';
import { CloseCircleFilled } from '@ant-design/icons-vue';

defineOptions({ name: 'router-tags' });

const { getCssVar } = useCssVarStore();

const routerTags = useRouterTags();
const { tagList } = storeToRefs(routerTags);

const route = useRoute();
watch(route, () => {
  if (route.fullPath !== '/') {
    const isExited = routerTags.isExited(route.fullPath);
    !isExited && routerTags.add((route?.meta?.title as string) || 'default title', route.fullPath);
  }
});

const router = useRouter();
const handleClick = (item: RouterTag) => {
  const params = item?.query
    ? {
        path: item.path,
        query: item.query
      }
    : {
        path: item.path
      };
  router.push(params);
};

const handleClose = (path: string) => {
  routerTags.remove(path);
};
</script>

<template>
  <section class="router-tags">
    <a-button
      size="small"
      v-for="item in tagList"
      :key="item.path"
      @click.stop="handleClick(item)"
      style="margin-right: 10px"
    >
      <div
        :style="{
          color:
            route.fullPath === item.path
              ? getCssVar('--primary-color') || '#1890ff'
              : 'var(--text-color)'
        }"
        class="item"
        @mouseenter="item.isHover = true"
        @mouseleave="item.isHover = false"
      >
        <span class="title">{{ item.title }}</span>
        <close-circle-filled
          class="close"
          v-if="item.isHover"
          @click.stop="handleClose(item.path)"
        />
        <div class="close" v-else></div>
      </div>
    </a-button>
  </section>
</template>

<style lang="less" scoped>
.router-tags {
  display: flex;
  overflow-x: auto;
  padding: 5px;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .item {
    display: flex;
    align-items: center;
    color: var(--text-color);
    .title {
      margin-right: 5px;
    }
    .close {
      position: relative;
      z-index: 999;
      font-size: 11px;
      width: 11px;
      cursor: pointer;
      color: var(--icon-color);
    }
  }
  .is-active {
    color: var(--primary-color);
  }
}
</style>
