import { createApp } from 'vue';

import { vuetify, pinia, i18n } from './plugins';

import App from './App.vue';

import './style.scss';

const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(vuetify);

app.mount('#app');
