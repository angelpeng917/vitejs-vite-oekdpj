import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

//createApp(App).mount('#app');簡寫
const app = createApp(App);

app.mount('#app');
