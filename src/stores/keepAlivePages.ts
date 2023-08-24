import { defineStore } from 'pinia';

type State = {
  includePages: string[];
  excludePages: string[];
  maxKeepAlivePages: number;
  currentPageName: string | null;
};

export const useKeepAlivePagesStore = defineStore('KeepAlivePagesStore', {
  state: (): State => ({
    includePages: [],
    excludePages: [],
    maxKeepAlivePages: 5,
    currentPageName: null,
  }),

  persist: {
    key: 'KeepAlivePagesStore',
    storage: localStorage
  },

  actions: {
    setCurrentPageName(val: string | null) {
      this.currentPageName = val;
    },

    setMaxKeepAlivePages(val: number) {
      this.maxKeepAlivePages = val;
    },

    addIncludePage(val: string) {
      if (this.isExistIncludePage(val)) {
        return;
      }
      this.includePages.push(val);
    },

    removeIncludePage(val: string) {
      const index = this.includePages.findIndex((item) => item === val);
      this.includePages.splice(index, 1);
    },

    isExistIncludePage(val: string) {
      return this.includePages.includes(val);
    }
  }
});
