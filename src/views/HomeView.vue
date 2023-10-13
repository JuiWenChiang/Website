<template>
  <div class="veiw-home-layout">
    <div class="h-100 w-50 justify-center align-center">
      <h1 class="font-weight-medium">{{t('homePage.title')}}</h1>
      <h1 class="font-weight-medium text">{{t('homePage.name')}}</h1>
    </div>
    <div class="h-100 w-50 d-flex flex-column align-end justify-center">
      <p>{{t('homePage.summary')}}</p>
      <div>
        <v-icon icon="mdi-email-edit-outline" size="x-large"></v-icon>
        <v-icon
          icon="mdi-github"
          size="x-large"
          @click="openLink('github')"
        ></v-icon>
        <v-icon
          icon="mdi-linkedin"
          size="x-large"
          @click="openLink('linkedin')"
        ></v-icon>
      </div>
      <v-btn @click="downloadResume">get Resume</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactStore } from "../stores/contact";
import { useI18n } from 'vue-i18n'
import ToolBtn from "../components/common/AppBar.vue";

const contactOutLink = contactStore();
const { openLink, downloadResume } = contactOutLink;
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.veiw-home-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>