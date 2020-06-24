import './index.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/index';
import Web from './web.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  components: { Web },
  template: '<Web/>',
  router
});
