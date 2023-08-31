<template>
    <div class="text-center">Project</div>
    <div class="veiw-project-layout">
        <v-card class="project-card" v-for="index in projectsData.length" :key="index">
            <v-card-text>
                <div class="text-h5 my-1">{{ projectsData[index - 1].title }}</div>
                <span v-for="item in projectsData[index - 1].tag.length" :key="item">
                    <v-chip class="mr-2" size="small" color="green">{{ projectsData[index - 1].tag[item - 1] }}</v-chip>
                </span>
                <p class="text--primary">{{ projectsData[index - 1].summary }}</p>
            </v-card-text>
            <v-card-actions>
                <v-btn variant="text" color="teal-accent-4" @click="reveal = true"> Find More </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <v-card v-if="reveal" class="v-card--reveal">
                    <v-card-text>
                        <p>{{ projectsData[index - 1].information }}</p>
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
const projectsData = DefaultData.project;

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