<template>
    <v-card>
        <v-layout class="layout">
            <v-navigation-drawer floating permanent>
                <v-list class="list-body" density="compact" nav>
                    <v-list-item v-for="item in listItem" :key="item" :title="item.title" :value="item.value"
                        @click="handleLinkClick(item.value)"></v-list-item>
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
    { title: 'Home', value: 'home' },
    { title: 'About', value: 'about' },
    { title: 'Project', value: 'project' },
]

function handleLinkClick(value: string) {
    // Emit the 'link-clicked' event with the value of the clicked link
    emit('linkClicked', value);
}

</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
}

.list-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>