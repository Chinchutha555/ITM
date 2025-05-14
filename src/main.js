// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import './style.css'

createApp(App)
  .use(router) // ใช้ router ในแอป
  .mount('#app');