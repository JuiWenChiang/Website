import AOS from 'aos'
import 'aos/dist/aos.css'
import { appendFile } from 'fs'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init({
            once: false,
        });
    }
});

declare module 'aos';

`
import AOS from 'aos';
export default {
bind(el, binding, vnode) {
// add listener
AOS.init({
duration: 1200
});
},

// // When the bound element is inserted into the DOM...
// inserted(el, binding) {
// },

update(el, binding) {
AOS.refresh();
},

unbind(el, binding) {
// window.stroll.unbind(el);
}
};
`