import { onActivated, onMounted } from 'vue';

import { useKeepAlivePagesStore } from '@/stores/keepAlivePages';

export const useMounted = (fn: () => void) => {
  const keepAlivePagesStore = useKeepAlivePagesStore();
  const currentPageName = keepAlivePagesStore.currentPageName || '';

  keepAlivePagesStore.isExistIncludePage(currentPageName) ? onActivated(fn) : onMounted(fn);
};