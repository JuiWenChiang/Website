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
import VueVirtualScroller from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import VCarousel from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const app = createApp(App)
const emitter = mitt();
const icons = cilIcons; // https://coreui.io/vue/docs/components/icon.html#usage

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(i18n);
app.use(VueVirtualScroller);
app.use(VCarousel);

app.provide("axios", app.config.globalProperties.axios);
app.provide("emitter", emitter);
app.provide('icons', icons)
app.component('CIcon', CIcon)

app.mount('#app')
