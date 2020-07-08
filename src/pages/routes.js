import Root from './index.vue';
import CarRentalQuote from './car-rental/quote/index.vue';
import NotFound from './404.vue';

export default [
  {
    path: '/',
    component: Root
  },
  {
    path: '/car-rental/quote',
    component: CarRentalQuote
  },
  {
    path: '*',
    component: NotFound
  }
];
