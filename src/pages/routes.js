import Root from './index.vue';
import NotFound from './404.vue';

export default [
  {
    path: '/',
    component: Root
  },
  {
    path: '*',
    component: NotFound
  }
];
