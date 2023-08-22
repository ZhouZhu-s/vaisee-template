import { defineStore } from 'pinia';

type State = {
  cssVars: { [key: string]: string | null };
};

export const useCssVarStore = defineStore('CssVarStore', {
  state: (): State => ({
    cssVars: {}
  }),
  persist: {
    key: 'CssVarStore',
    storage: localStorage
  },
  actions: {
    /**
     * Sets the value of a CSS variable and updates the corresponding style property on the document element.
     *
     * @param {string} name - The name of the CSS variable.
     * @param {string} value - The value to set for the CSS variable.
     * @example cssVarStore.setCssVar('--primary-color', 'red')
     */
    setCssVar(name: string, value: string) {
      this.cssVars[name] = value;
      document.documentElement.style.setProperty(name, value);
    },

    /**
     * Retrieves the value of a CSS variable by name.
     *
     * @param {string} name - The name of the CSS variable.
     * @return {string} The value of the CSS variable.
     * @example cssVarStore.getCssVar('--primary-color') // 'red'
     */
    getCssVar(name: string) {
      if (!this.cssVars[name]) {
        this.cssVars[name] = getComputedStyle(document.documentElement).getPropertyValue(name);
      }
      return this.cssVars[name];
    }
  }
});
