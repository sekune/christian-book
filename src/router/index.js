import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Container from '@/components/layouts/container';

const About = () => import('../views/About');
const BestSeller = () => import('../views/BestSeller');

const routes = [
  {
    path: '/',
    name: 'Container',
    component: Container,
    redirect: '/home',
    children: [
      { name: 'Home', path: '/home', component: Home },
      { name: 'About', path: '/about', component: About },
      { name: 'Bestseller', path: '/best', component: BestSeller },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});
/* 
router.beforeEach((to, from, next) => {
  if (to.name !== 'Home') next({ name: 'Home' });
  else next();
}); */

export default router;
