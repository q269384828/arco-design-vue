import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
const app = createApp(App);
import '@arco-design/web-vue/index.less';
app.use(router);
app.mount('#app');
