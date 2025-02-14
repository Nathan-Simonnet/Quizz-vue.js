// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Quiz from '../components/Quiz.vue';
import End from '../components/End.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/quiz', component: Quiz },
  { path: '/end', component: End },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;