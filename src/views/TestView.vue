<template>
    <div class="card-layout">
        <div class="w-50">
            <span>Hey there,I'm Aileen.</span>
            <p>I'm interested in designing meaningful experiences that shape how we interact with
                technology.
            </p>
            <p> I'm currently designing experiences to make Amazon a better place to discover and research products.
                Previously, I studied Communication Design at BTK Berlin, where I wrote my thesis on the effects of
                biases
                in design. Before that, I worked with brands to create digital products at Edenspiekermann. I also
                helped
                improve Tumblr's posting experience on mobile and helped General Assembly launch a new online course.
                I spend my time taking photos, drawing, and exploring places. Other times, I'm working on becoming a
                better
                speaker.
                Let's chat — hello@aileen.co
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import DefaultData from "../stores/defaultData.json";
import IconAutoCad from "../components/icons/IconAutoCad.vue";
import IconFastAPI from "../components/icons/IconFastAPI.vue";
import IconDx from "../components/icons/IconDx.vue";
import { ref, markRaw, onMounted } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { t } = useI18n();
const TimelineData: Array<any> = DefaultData.timeline;

onMounted(() => {
    AOS.init();
    AOS.refresh();
});

const customIcon = (name: string) => {
    switch (name) {
        case "IconAutoCad":
            return IconAutoCad;
        case "IconDx":
            return IconDx;
        case "IconFastAPI":
            return IconFastAPI;
        default:
            break;
    }
};
</script>

<style lang="scss" scoped>
.sheet-layout {
    width: 70%;
    display: flex;
    justify-content: center;
}

.card-layout {
    width: 100%;
    height: 100vh;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-image: url('/imgs/test.svg');
    // background-size: cover;
}
</style>