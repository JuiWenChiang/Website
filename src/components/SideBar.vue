<template>
    <v-navigation-drawer app>
        <v-list>
            <v-list-item link to="/">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/about">
                <v-list-item-icon>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>