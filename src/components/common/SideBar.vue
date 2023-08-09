<template>
    <v-card>
        <v-layout class="layout">
            <v-navigation-drawer floating permanent>
                <v-list class="list-body" density="compact" nav>
                    <v-list-item class="vertical-text-box">Home</v-list-item>
                    <v-list-item v-for="item in listItem" :key="item" :value="item.value">
                        <v-icon icon="mdi-circle-medium" @click="handleLinkClick(item.value)"></v-icon>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 250px"></v-main>
        </v-layout>
    </v-card>
</template>

<script setup lang="ts">
// import { defineEmits } from 'vue';

// const emit = defineEmits();
const emit = defineEmits(['linkClicked']); // Define the custom event 'linkClicked'

const listItem: any[] = [
    { title: 'Jui Wen Chiang', value: 'home' },
    { title: 'About', value: 'about' },
    { title: 'Contact', value: 'contact' },
    { title: 'Project', value: 'project' },
    { title: 'Resume', value: 'resume' },
    { title: 'Story', value: 'story' },
]

function handleLinkClick(value: string) {
    // Emit the 'link-clicked' event with the value of the clicked link
    emit('linkClicked', value);
}

</script>

<style lang="scss" scoped>
.vertical-text-box {
    writing-mode: vertical-rl;
    text-align: center;
}

.layout {
    height: 100%;
}

.list-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>