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
import { CIcon } from '@coreui/icons-vue';
import * as cilIcons from '@coreui/icons';

const app = createApp(App)

// https://coreui.io/vue/docs/components/icon.html#usage
const icons = cilIcons;

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(i18n);
app.provide('icons', icons)
app.component('CIcon', CIcon)
const emitter = mitt();

app.provide("axios", app.config.globalProperties.axios);
app.provide("emitter", emitter);

app.mount('#app')
