<template>
    <h1>Contact</h1>
    <v-icon icon="mdi-github" size="x-large" @click="openLink('github')"></v-icon>
    <v-icon icon="mdi-linkedin" size="x-large" @click="openLink('linkedin')"></v-icon>
</template>

<script setup lang="ts">

function openLink(mode: string) {
    let linkURL = '';
    switch (mode) {
        case 'github':
            linkURL = 'https://github.com/JuiWenChiang';
            break;
        case 'linkedin':
            linkURL = 'https://www.linkedin.com/in/juiwen-chiang1995/';
            break;
    }

    window.open(linkURL, '_blank');
}

</script>

<style lang="scss" scoped></style>