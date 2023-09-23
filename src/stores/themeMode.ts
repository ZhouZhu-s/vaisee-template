import { defineStore } from 'pinia';

type State = {
  mode: 'light' | 'dark';
  isSyncSystem: boolean;
};

export const useThemeMode = defineStore('ThemeModeStore', {
  state: (): State => {
    return {
      mode: 'dark',
      isSyncSystem: true
    };
  },
  persist: {
    key: 'ThemeModeStore',
    storage: localStorage
  },
  actions: {
    setMode(mode: State['mode']) {
      this.mode = mode;
      this.setBodyMode();
    },

    getMode() {
      return this.mode;
    },

    toggleMode() {
      this.mode = this.mode === 'light' ? 'dark' : 'light';
      this.setBodyMode();
    },

    setSyncSystem(isSyncSystem: boolean) {
      this.isSyncSystem = isSyncSystem;
      this.setBodyMode();
    },

    setBodyMode() {
      document.body.setAttribute('mode', this.mode);
    }
  },
});

