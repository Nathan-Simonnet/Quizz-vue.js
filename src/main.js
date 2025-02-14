// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Pinia is a state management library for Vue.js
import router from './router'; // Vue Router for handling routes

// Create a Pinia instance for state management
const pinia = createPinia();

// Create the Vue app
const app = createApp(App);

// Use Pinia and Vue Router
app.use(pinia);
app.use(router);

// Mount the app to the DOM
app.mount('#app');