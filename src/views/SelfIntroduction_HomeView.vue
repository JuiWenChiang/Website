<template>
    <div class="responsive-text">
        <div class="website_title"> {{ t(`selfIntroduction.websiteTitle`) }}</div>
        <p class="introduction-text">{{ t(`selfIntroduction.introduction`) }}</p>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss" scoped>
// .responsive-text {
//     white-space: pre-wrap;
//     word-wrap: break-word;
// }

.website_title {
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.3;
}

.introduction-text {
    padding-top: 2rem;
    line-height: 1.5;
}
</style>