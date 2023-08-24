import type { App } from 'vue';
import { auth } from './auth';

export const setupDirectives = (app: App) => {
  app.directive('auth', auth);
};
