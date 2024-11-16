import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css' // Подключаем иконки
import vuetify from "./plugins/vuetify";


// Создаем и монтируем Vue приложение
createApp(App)
  .use(router)
  .use(vuetify) // Подключаем Vuetify к приложению
  .mount('#app')
