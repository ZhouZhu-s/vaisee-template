import { defineStore } from 'pinia';

type State = {
  mode: 'light' | 'dark';
};

export const useThemeMode = defineStore('ThemeModeStore', {
  state: (): State => {
    return {
      mode: 'dark'
    };
  },
  persist: {
    key: 'ThemeModeStore',
    storage: localStorage
  },
  actions: {
    setMode(mode: 'light' | 'dark') {
      this.mode = mode;
    },

    getMode() {
      return this.mode;
    },

    toggleMode() {
      this.mode = this.mode === 'light' ? 'dark' : 'light';
    }
  }
});