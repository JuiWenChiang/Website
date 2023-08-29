<template>
    <v-card class="h-100 w-100">
        <v-carousel class="veiw-project-layou" hide-delimiters>
            <dev class="h-100 w-100" v-for="(item, index) of GalleryData" :key="index">
                <v-carousel-item class="h-100 w-100">
                    <p class="text-h6 text-center ma-1" style="height: 5%;">{{item.title}}</p>
                    <v-img style="height: 90%;" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                </v-carousel-item>
            </dev>
        </v-carousel>
    </v-card>
</template>

<script setup lang="ts">
import DefaultData from '@/stores/defaultData.json';

const GalleryData = DefaultData.gallery;

</script>

<style lang="scss" scoped>
.veiw-project-layout {
    height: 100%;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>