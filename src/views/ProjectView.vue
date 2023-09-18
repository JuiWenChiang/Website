<template>
    <v-row no-gutters class="d-flex flex-row justify-center">
        <v-col  v-for="(item, index) in ProjectsData" :key="index" cols="3">
            <v-card class="ma-2">
                <v-img cover :src="item.image"> </v-img>

                <v-card-title class="text-center">
                    <h2>{{ item.title }}</h2>
                </v-card-title>

                <v-card-text>
                    <v-chip class="ma-1" v-for="tag in item.tag" :key="tag" size="x-small" color="green">
                        {{ tag }}
                    </v-chip>
                    <p class="ma-1">{{ item.summary }}</p>
                </v-card-text>

                <v-card-actions class="d-flex flex-row justify-end">
                    <v-btn color="teal-accent-4" @click="item.reveal = true">
                        Information
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <v-card v-if="item.reveal === true" class="v-card--reveal d-flex flex-row justify-end">
                        <v-card-text>
                            <p>{{ item.information }}</p>
                        </v-card-text>
                        <v-card-actions class="align-end">
                            <v-btn color="teal-accent-4" @click="item.reveal = !item.reveal"> Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>

            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DefaultData from '@/stores/defaultData.json';

const ProjectsData = ref(DefaultData.project);

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