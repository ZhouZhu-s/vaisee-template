import { defineStore } from 'pinia';

type State = {
  includePages: string[];
  excludePages: string[];
  maxKeepAlivePages: number;
};

export const useKeepAlivePagesStore = defineStore('KeepAlivePagesStore', {
  state: (): State => ({
    includePages: [],
    excludePages: [],
    maxKeepAlivePages: 5
  }),
  
  persist: {
    key: 'KeepAlivePagesStore',
    storage: localStorage
  },

  actions: {
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
