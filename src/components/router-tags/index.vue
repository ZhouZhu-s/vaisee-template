<script setup lang="ts">
import { inject, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRouterTags, type RouterTag } from '@/stores/routerTags';
import { useCssVarStore } from '@/stores/cssStore';
import { storeToRefs } from 'pinia';
import { CloseCircleFilled } from '@ant-design/icons-vue';
import { SyncOutlined, MenuOutlined } from '@ant-design/icons-vue';

defineOptions({ name: 'router-tags' });

const { getCssVar } = useCssVarStore();

const routerTags = useRouterTags();
const { tagList } = storeToRefs(routerTags);

const route = useRoute();
watch(route, () => {
  if (route.fullPath !== '/') {
    const isExited = routerTags.isExited(route.fullPath);
    if (isExited) {
      routerTags.setActive(route.fullPath);
    } else {
      routerTags.add((route?.meta?.title as string) || 'default title', route.fullPath);
    }
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

const reload = inject('reload') as Function;
const isRotate = ref(false);
const handleReload = () => {
  reload();
  isRotate.value = true;
  setTimeout(() => {
    isRotate.value = false;
  }, 300);
};
</script>

<template>
  <section class="router-tags">
    <div class="tags">
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
          <!-- <div class="close" v-else></div> -->
        </div>
      </a-button>
    </div>
    <div class="expand">
      <sync-outlined :class="{ rotate: isRotate }" class="cursor-pointer" @click="handleReload" />
      <a-dropdown>
        <MenuOutlined class="cursor-pointer" style="margin-left: 8px" />
        <template #overlay>
          <a-menu>
            <a-menu-item @click="routerTags.removeUnActive()">
              <a>关闭其它</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </section>
</template>

<style lang="less" scoped>
.router-tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 22px;
  padding: 5px 0;
  width: 100%;
  .tags {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
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
  }
  .expand {
    display: flex;
    flex-direction: row;
    color: var(--text-color);
    .cursor-pointer {
      cursor: pointer;
    }
    .rotate {
      transform: rotate(180deg);
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
