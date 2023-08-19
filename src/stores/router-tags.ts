import router from '@/router';
import { defineStore } from 'pinia';

export type RouterTag = {
  title: string;
  path: string;
  active: boolean;
  isHover: boolean;
	query?: any;
};

type State = {
  tagList: RouterTag[];
};

export const useRouterTags = defineStore('RouterTagStore', {
  state: (): State => {
    return {
      tagList: []
    };
  },
  persist: {
    key: 'RouterTagStore',
    storage: sessionStorage
  },
  actions: {
    add(title: string, path: string, query?: object) {
      this.cancelAllActive();
      this.tagList.push({
        title,
        path,
				query,
        active: true,
        isHover: false,
      });
    },

    isExited(path: string) {
      return this.tagList.some((item) => item.path === path);
    },

    remove(path: string) {
      if (this.tagList.length === 1) {
        return;
      }
      const index = this.tagList.findIndex((item) => item.path === path);
      this.tagList.splice(index, 1);
      if (index === 0) {
        router.push(this.tagList[0].path);
        return;
      }
      if (index > 0) {
        router.push(this.tagList[index - 1].path);
        return;
      }
    },

    cancelAllActive() {
      this.tagList.forEach((item) => {
        if (item.active) {
          item.active = false;
        }
      });
    }
  }
});
