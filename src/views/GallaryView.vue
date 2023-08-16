<template>
    <v-carousel class="veiw-project-layou" hide-delimiters>
        <dev class="contanier" v-for="item of imags" :key="item">
            <span class="text">{{ item.text }}</span>
            <v-carousel-item class="imges" :src="item.src"></v-carousel-item>
        </dev>
    </v-carousel>
</template>

<script setup lang="ts">
const imags = [
    { text: 'Godnesse', src: '/imgs/Godnesse.jpg' },
    { text: 'Godnesse', src: '/imgs/Godnesse.jpg' },
    { text: 'Godnesse', src: '/imgs/Godnesse.jpg' },
];

</script>

<style lang="scss" scoped>
.veiw-project-layout {
    height: 100%;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.contanier {
    height: 100%;
    width: 100%;
}

.text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
}

.imges {
    height: 100%;
    width: 100%;
}
</style>