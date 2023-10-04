<template>
    <h1>Resume</h1>

    <v-btn @click="downloadResume">get Resume</v-btn>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, type StyleValue } from 'vue'
import { contactStore } from '../stores/contact'

const contactOutLink = contactStore();
const { downloadResume } = contactOutLink;

</script>

<style lang="scss" scoped></style>