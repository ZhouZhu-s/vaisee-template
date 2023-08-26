import { watch } from 'vue';
import { useKeepAlivePagesStore } from '@/stores/keepAlivePages';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

export const useKeepAlivePages = () => {
  const route = useRoute();
  const keepAlivePagesStore = useKeepAlivePagesStore();

  watch(route, () => {
    const isKeepAlive = route.meta?.keepAlive;
    const pageName = route.matched[route.matched.length - 1].components?.default?.name || null;
    console.log('pageName', pageName);

    if (isKeepAlive && pageName) {
      keepAlivePagesStore.addIncludePage(pageName);
    }
    
    keepAlivePagesStore.setCurrentPageName(pageName);
  });

  return {
    ...storeToRefs(keepAlivePagesStore),
    setMaxKeepAlivePages: keepAlivePagesStore.setMaxKeepAlivePages,
    removeIncludePage: keepAlivePagesStore.removeIncludePage,
    isExistIncludePage: keepAlivePagesStore.isExistIncludePage,
    addIncludePage: keepAlivePagesStore.addIncludePage
  };
};
