import Home from './pages/Home.vue';
import Test from './pages/Test.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Test',
    path: '/test',
    component: Test,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


export const routeDetails = {
  Home: {
    title: '首页',
    description: '欢迎使用 Arco Design Vue 示例项目',
  },
  Test: {
    title: '测试页面',
    description: '这是一个测试页面',
  },
};
