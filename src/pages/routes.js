import Home from './index.vue';
import About from './about/index.vue';
import Products from './products/index.vue';
import Illustrations from './products/illustrations/index.vue';
import NotFound from './404.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/products',
    component: Products,
    children: [
      {
        path: 'illustrations',
        component: Illustrations
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];
