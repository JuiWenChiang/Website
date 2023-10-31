<template>
  <div class="veiw-home-layout">
    <h2>JUI WEN CHIANG</h2>
    <p>a software engineer, a designer</p>
    <div class="h-100 w-50 d-flex flex-column align-center justify-center">      
      <v-btn class="ma-2" icon @click="openLink('github')">
        <v-icon icon="mdi-github" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkGithub`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon @click="openLink('linkedin')">
        <v-icon icon="mdi-linkedin" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkLinkedin`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon @click="downloadResume">
        <v-icon icon="mdi-file-account-outline" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkResume`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2" icon @click="sendMail">
        <v-icon icon="mdi-email-edit-outline" size="x-large"></v-icon>
        <v-tooltip activator="parent">{{ t(`common.button.linkMail`) }}</v-tooltip>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactStore } from "../stores/contact";
import { useI18n } from "vue-i18n";
import ToolBtn from "../components/common/AppBar.vue";

const contactOutLink = contactStore();
const { openLink, downloadResume, sendMail } = contactOutLink;
const { t } = useI18n();

</script>

<style lang="scss" scoped>
.veiw-home-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/imgs/test.svg');
  background-size: cover;
}
</style>