<template>
    <h1 class="text-center">Contact</h1>

    <div class="d-flex justify-center ma-2">
        <v-icon icon="mdi-github" size="x-large" @click="openLink('github')"></v-icon>
        <v-icon icon="mdi-linkedin" size="x-large" @click="openLink('linkedin')"></v-icon>
    </div>

    <h3 class="text-center">Send Email</h3>
    <v-container class="w-50">
        <v-row no-gutters>
            <v-col cols="6" class="pa-1">
                <v-text-field label="Name" density="compact" variant="solo" hide-details clearable></v-text-field>
            </v-col>
            <v-col cols="6" class="pa-1">
                <v-text-field label="Email" density="compact" variant="solo" hide-details clearable></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
                <v-text-field label="Title" density="compact" variant="solo" hide-details clearable> </v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
                <v-textarea label="Text" density="compact" variant="solo" rows="4" row-height="30" hide-details
                    clearable></v-textarea>
            </v-col>
            <v-col cols="6" class="pa-1">
                <v-btn> Submit </v-btn>
            </v-col>
        </v-row>
    </v-container>

    <v-btn @click="sendEmail">send Email</v-btn>
</template>

<script setup lang="ts">
import { contactStore } from '@/stores/contact';
import Email from '@/assets/smtp/smtp';

const contactOutLink = contactStore();
const { openLink } = contactOutLink;
const sendEmail = () => {
    Email.send({
        SecureToken: "9c4517ea-873d-41de-9383-1b85231e6fbc",
        To: 'juiwenchiang1995@gmail.com',
        From: "沒問題<k184tye@gmail.com>",
        Subject: "This is the subject",
        Body: "And this is the body",
    }).then(
        messageas => alert(messageas)
    );
}

</script>

<style lang="scss" scoped></style>