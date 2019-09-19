import Vue from 'vue';
import App from './app.vue';

import 'bootstrap';
import './styles/index.scss';

const vueApp = new Vue({ render: h => h(App) });
vueApp.$mount('#app');
