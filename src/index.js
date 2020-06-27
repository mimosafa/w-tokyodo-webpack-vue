import './index.scss';

import Vue from 'vue';
import router from './router';
import Web from './web.vue';

new Vue({
  render: h => h(Web),
  router
}).$mount('#app');
