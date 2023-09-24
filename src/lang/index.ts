import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './en';
import zh from './zh';

export type LocaleType = 'zh-cn' | 'en';

const messages: Record<LocaleType, any> = {
  'zh-cn': zh,
  en: en
};

const LangStore = localStorage.getItem('LangStore');
const defaultLocale = LangStore ? JSON.parse(LangStore).lang || 'zh-cn' : 'zh-cn';

export const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, //全局生效$t
  locale: defaultLocale, // 默认使用的语言
  messages // 使用数据源
});

export const setupI18n = (app: App) => {
  app.use(i18n);
};
