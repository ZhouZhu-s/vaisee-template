import { watch } from 'vue';
import { useKeepAlivePagesStore } from '@/stores/keepAlivePages';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

export const useKeepAlivePages = () => {
  const route = useRoute();
  const keepAlivePagesStore = useKeepAlivePagesStore();

  watch(route, (r) => {
    const isKeepAlive = r.meta?.keepAlive;
    const pageName = r.matched[0]?.components?.default?.name;
    if (isKeepAlive && pageName) {
      keepAlivePagesStore.addIncludePage(pageName);
    }
  });

  return {
    ...storeToRefs(keepAlivePagesStore),
    setMaxKeepAlivePages: keepAlivePagesStore.setMaxKeepAlivePages,
    removeIncludePage: keepAlivePagesStore.removeIncludePage,
    isExistIncludePage: keepAlivePagesStore.isExistIncludePage,
    addIncludePage: keepAlivePagesStore.addIncludePage
  };
};
