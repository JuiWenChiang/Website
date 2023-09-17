<template>
    <h1 class="text-center">Project</h1>
    <div class="veiw-project-layout">
        <v-card class="project-card" v-for="(item, index) in ProjectsData" :key="index">
            <v-card-title>
                <v-img :width="100" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                <h2 class="text-h5 my-1">{{ item.title }}</h2>
            </v-card-title>

            <v-card-text>
                <div class="d-flex flex-row justify-center">
                    <v-chip v-for="tag in item.tag" :key="tag" class="mr-2" size="small" color="green">
                        {{ tag }}
                    </v-chip>
                </div>
                <div class="ma-2">{{ item.summary }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn variant="text" color="teal-accent-4" @click="reveal = true"> Find More </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card v-if="reveal" class="v-card--reveal">
                    <v-card-text>
                        <p>{{ item.information }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn variant="text" color="teal-accent-4" @click="reveal = false"> Close </v-btn>
                    </v-card-actions>
                </v-card>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DefaultData from '@/stores/defaultData.json';

const reveal = ref(false);
const ProjectsData = DefaultData.project;

</script>

<style lang="scss">
.veiw-project-layout {
    // height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .project-card {
        height: 35%;
        margin: 1%;
        flex-basis: calc(33.33% - 2%);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.v-card--reveal {
    width: 100%;
    height: 100%;
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
}
</style>