<script setup lang="ts">
    import { ToDo } from '../dtos';

    const props = defineProps<{
        idx: number;
        todo: ToDo;
    }>();

    defineEmits<{
        (e: 'remove', item: ToDo): void;
    }>();
</script>

<template>
    <v-card class="mb-4">
        <v-card-text>
            <div class="d-flex align-center">
                <v-checkbox density="compact" hide-details class="flex-grow-0 mr-4" color="primary" v-model="todo.completed"></v-checkbox>
                <span class="flex-grow-1" :class="{ 'text-decoration-line-through': todo.completed }">
                    {{idx}}. {{todo.title}}
                </span>
                <span class="d-flex">
                    <v-btn icon="edit" variant="plain" size="small" />
                    <v-btn icon="delete" variant="plain" size="small" @click="$emit('remove', todo)" />
                </span>
            </div>
        </v-card-text>
    </v-card>
</template>