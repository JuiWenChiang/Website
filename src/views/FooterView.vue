<template>
  <v-footer class="d-flex flex-column align-center justify-center ma-2">
    <div class="ma-2">
     <v-btn class="ma-2 elevation-1" icon size="small" @click="openLink('github')" >
        <v-icon icon="mdi-github" color="info" size="x-large"></v-icon>
        <v-tooltip location="top" activator="parent">{{ t(`common.button.linkGithub`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2 elevation-1" icon size="small" @click="openLink('linkedin')">
        <v-icon icon="mdi-linkedin" color="info" size="x-large"></v-icon>
        <v-tooltip location="top" activator="parent">{{ t(`common.button.linkLinkedin`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2 elevation-1" icon size="small" @click="downloadResume">
        <v-icon icon="mdi-file-account-outline" color="info" size="x-large"></v-icon>
        <v-tooltip location="top" activator="parent">{{ t(`common.button.linkResume`) }}</v-tooltip>
      </v-btn>
      <v-btn class="ma-2 elevation-1" icon size="small" @click="sendMail">
        <v-icon icon="mdi-email-edit-outline" color="info" size="x-large"></v-icon>
        <v-tooltip location="top" activator="parent">{{ t(`common.button.linkMail`) }}</v-tooltip>
      </v-btn>
    </div>
    <p>© 2023 JuiWen Chiang</p>
  </v-footer>
</template>

<script setup lang="ts">
import { contactStore } from "../stores/contact";
import { useI18n } from "vue-i18n";

const contactOutLink = contactStore();
const { openLink, downloadResume, sendMail } = contactOutLink;
const { t } = useI18n();
</script>