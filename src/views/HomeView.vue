<template>
  <div class="veiw-home-layout">
    <div class="h-100 w-50 justify-center align-center">
      <h1 class="font-weight-medium">{{ t("homePage.title") }}</h1>
      <h1 class="font-weight-medium text">{{ t("homePage.name") }}</h1>
    </div>
    <div class="h-100 w-50 d-flex flex-column align-end justify-center">
      <p>{{ t("homePage.summary") }}</p>
      <v-btn icon @click="openLink('github')">
        <v-icon icon="mdi-github" size="x-large"></v-icon>
        <v-tooltip activator="parent">welcom to my Github</v-tooltip>
      </v-btn>
      <v-btn icon @click="openLink('linkedin')">
        <v-icon icon="mdi-linkedin" size="x-large"></v-icon>
        <v-tooltip activator="parent">welcom to my Linkedin</v-tooltip>
      </v-btn>
      <v-btn icon @click="downloadResume">
        <v-icon icon="mdi-file-account-outline" size="x-large"></v-icon>
        <v-tooltip activator="parent">Download my Resume</v-tooltip>
      </v-btn>
      <v-btn icon @click="sendMail">
        <v-icon icon="mdi-email-edit-outline" size="x-large"></v-icon>
        <v-tooltip activator="parent">Get in Touch</v-tooltip>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactStore } from "../stores/contact";
import { useI18n } from "vue-i18n";
import ToolBtn from "../components/common/AppBar.vue";

const contactOutLink = contactStore();
const { openLink, downloadResume } = contactOutLink;
const { t } = useI18n();

const sendMail = () => {
  let recipient = "juiwenchiang1995@gmail.com";
  const emailLink = `mailto:${recipient}`;
  // 開啟系拱預設軟體
  window.location.href = emailLink;
};
</script>

<style lang="scss" scoped>
.veiw-home-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://cdn.vuetifyjs.com/images/parallax/material.jpg") no-repeat
      center center fixed;
  background-size: cover;
}
</style>