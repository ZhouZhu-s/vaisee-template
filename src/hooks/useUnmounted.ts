import { useKeepAlivePagesStore } from '@/stores/keepAlivePages';
import { onDeactivated, onUnmounted } from 'vue';

export const useUnmounted = (fn: () => void) => {
  const keepAlivePagesStore = useKeepAlivePagesStore();
  const currentPageName = keepAlivePagesStore.currentPageName || '';

  keepAlivePagesStore.isExistIncludePage(currentPageName) ? onDeactivated(fn) : onUnmounted(fn);
};
