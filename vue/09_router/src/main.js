import { createApp } from 'vue'
import App from './App.vue'
import router from './router/01_router.js';

/* npm install vue-router@next로 dependency 추가 */
// createApp(App).user(router).mount('#app')
// 위에가 너무길어지면 밑에처럼 ..추가
const app = createApp(App);
app.use(router);
app.mount('#app');