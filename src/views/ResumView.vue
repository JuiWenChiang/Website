<template>
    <h>Resume</h>
    <v-btn @click="downloadResume()">get Resume</v-btn>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, type StyleValue } from 'vue'

function downloadResume() {
    let pdfUrl = '/JuiWenChiange_Resume.pdf'
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'Jui_Wen_Chiange_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

</script>

<style lang="scss" scoped></style>