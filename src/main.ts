import { createApp } from 'vue';

import { vuetify, pinia } from './plugins';

import App from './App.vue';

import './style.scss';

const app = createApp(App);

app.use(pinia);
app.use(vuetify);

app.mount('#app');
