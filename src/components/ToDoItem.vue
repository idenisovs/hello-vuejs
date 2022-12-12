<script setup lang="ts">
    defineProps<{
        message: string;
    }>();
</script>

<template>
    <v-card>
        <v-card-text>
            {{message}}
        </v-card-text>
    </v-card>
</template>