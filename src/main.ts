import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import "./assets/main.css";
import "./assets/custom.css";
// import "sweetalert2/src/sweetalert2.scss";
import "@mdi/font/css/materialdesignicons.css";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
import mitt from "mitt";
import i18n from './plugins/i18n'

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(i18n);

const emitter = mitt();

app.provide("axios", app.config.globalProperties.axios);
app.provide("emitter", emitter);

app.mount('#app')
