import { defineStore } from 'pinia';
import { type LocaleType } from '@/lang';

interface State {
  lang: LocaleType;
}

export const useLangStore = defineStore('LangStore', {
  state: (): State => {
    return {
      lang: 'zh-cn'
    };
  },
  persist: {
    key: 'LangStore',
    storage: localStorage
  },
  actions: {
    setLang(lang: LocaleType) {
      this.lang = lang;
    },

    getLang() {
      return this.lang;
    },

    toggleLang() {
      this.lang = this.lang === 'zh-cn' ? 'en' : 'zh-cn';
    }
  }
});
