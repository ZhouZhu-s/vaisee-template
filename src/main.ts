import './assets/main.css';

import { createApp } from 'vue';
import { setupRouter } from './router';
import { setupDirectives } from './directives';
import { setupStore } from './stores';

import App from './App.vue';

const app = createApp(App);

setupRouter(app);
setupDirectives(app);
setupStore(app);

app.mount('#app');
