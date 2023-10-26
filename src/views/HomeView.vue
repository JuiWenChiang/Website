<template>
  <div class="veiw-home-layout">
    <h2>JUI WEN CHIANG</h2>
    <p>a software engineer, a designer</p>
    <div class="h-100 w-50 d-flex flex-column align-center justify-center">      
      <v-btn class="ma-2" icon size="small" @click="openLink('github')">
        <v-icon icon="mdi-github"></v-icon>
        <v-tooltip activator="parent">welcom to my Github</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon size="small" @click="openLink('linkedin')">
        <v-icon icon="mdi-linkedin"></v-icon>
        <v-tooltip activator="parent">welcom to my Linkedin</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon size="small" @click="downloadResume">
        <v-icon icon="mdi-file-account-outline"></v-icon>
        <v-tooltip activator="parent">Download my Resume</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon size="small" @click="sendMail">
        <v-icon icon="mdi-email-edit-outline"></v-icon>
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
  flex-direction: column;
  align-items: center;
}
</style>