import './assets/main.css';

import App from './App.vue';
import { createApp } from 'vue';
import { setupDirectives } from './directives';
import { setupI18n } from './lang';
import { setupRouter } from './router';
import { setupStore } from './stores';

const app = createApp(App);

setupRouter(app);
setupDirectives(app);
setupStore(app);
setupI18n(app);

app.mount('#app');
