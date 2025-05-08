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