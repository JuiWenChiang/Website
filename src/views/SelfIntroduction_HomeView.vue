<template>
    <div class="veiw-home-layout">
        <div class="responsive-text">
            <div class="website_title"> {{ t(`selfIntroduction.websiteTitle`) }}</div>
            <p class="py-2">{{ t(`selfIntroduction.introduction`) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.responsive-text {
    width: 80%;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.website_title {
    font-size: 5rem;
    font-weight: bold;
}

.veiw-home-layout {
    // width: 100%; // Not allowed responsive page
    // height: 100vh;
    padding: 5%;
    // background-image: url('/imgs/test.svg');
    // background-size: cover;
}
</style>