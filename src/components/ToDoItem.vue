<script setup lang="ts">
    defineProps<{
        message: string;
    }>();
</script>

<template>
    <v-card class="mb-4">
        <v-card-text>
            <div class="d-flex align-center">
                <v-checkbox density="compact" hide-details class="mr-4"></v-checkbox>
                <span>{{message}}</span>
                <span class="d-flex">
                    <v-btn icon="edit" variant="plain" size="small" />
                    <v-btn icon="delete" variant="plain" size="small" />
                </span>
            </div>
        </v-card-text>
    </v-card>
</template>