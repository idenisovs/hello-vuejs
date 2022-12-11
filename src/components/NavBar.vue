<script setup lang="ts">
import { useSettingsStore } from '../store/use-settings-store';

const settings = useSettingsStore();
</script>

<template>
    <v-app-bar image="vbanner.jpg">
        <template v-slot:prepend>
            <v-app-bar-title class="text-white">
                ToDo
            </v-app-bar-title>
        </template>

        <v-btn variant="text" color="white" icon @click="settings.toggleLanguage()">
            {{settings.language}}
        </v-btn>

        <v-btn variant="text" color="white" :icon="settings.theme.icon" @click="settings.toggleTheme()" />
    </v-app-bar>
</template>