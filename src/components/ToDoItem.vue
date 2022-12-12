<script setup lang="ts">
    import { ref } from 'vue';
    import { ToDo } from '../dtos';

    const props = defineProps<{
        idx: number;
        todo: ToDo;
    }>();

    const emit = defineEmits<{
        (e: 'remove', item: ToDo): void;
        (e: 'select', item: ToDo): void;
        (e: 'deselect', item: ToDo): void;
    }>();

    const isSelected = ref(false);

    function handleCheckboxClick() {
        isSelected.value = !isSelected.value;

        if (isSelected.value) {
            emit('select', props.todo);
        } else {
            emit('deselect', props.todo);
        }
    }
</script>

<template>
    <v-card class="mb-4">
        <v-card-text>
            <div class="d-flex align-center">
                <v-checkbox density="compact" hide-details class="flex-grow-0 mr-4" color="primary" @click="handleCheckboxClick"></v-checkbox>
                <span class="flex-grow-1" :class="{ 'text-decoration-line-through': isSelected }">
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