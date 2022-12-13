<script setup lang="ts">
    import { ref } from 'vue';

    import { ToDo } from '../dtos';

    const props = defineProps<{
        idx: number;
        todo: ToDo;
    }>();

    const emit = defineEmits<{
        (e: 'remove', item: ToDo): void;
        (e: 'changes', item: ToDo): void;
    }>();

    const isEditMode = ref(false);

    function toggleEditMode() {
        isEditMode.value = !isEditMode.value;
    }

    function toggleToDoCompleted() {
        const changedToDo = {
            ...props.todo
        };

        changedToDo.completed = !changedToDo.completed;

        emit('changes', changedToDo);
    }

    function changeToDoTitle(event: Event) {
        const target = event.target as HTMLInputElement;

        const changedToDo = {
            ...props.todo
        };

        changedToDo.title = target.value;

        emit('changes', changedToDo);
    }
</script>

<template>
    <v-card class="mb-4">
        <v-card-text>
            <div class="d-flex align-center">
                <v-checkbox 
                    density="compact" 
                    hide-details class="flex-grow-0 mr-4" 
                    color="primary" 
                    :model-value="todo.completed" 
                    @click="toggleToDoCompleted()"
                >
                </v-checkbox>
                
                <v-text-field 
                    v-if="isEditMode" 
                    density="compact" 
                    variant="filled" 
                    hide-details 
                    single-line
                    :model-value="todo.title"
                    @input="changeToDoTitle"
                    @keyup.enter="toggleEditMode"
                    
                >
                </v-text-field>
                
                <span v-else class="flex-grow-1" :class="{ 'text-decoration-line-through': todo.completed }" @dblclick="toggleEditMode">
                    {{todo.id}}. {{todo.title}}
                </span>
                
                <span class="d-flex">
                    <v-btn icon="edit" variant="plain" size="small" @click="toggleEditMode" />
                    <v-btn icon="delete" variant="plain" size="small" @click="$emit('remove', todo)" />
                </span>
            </div>
        </v-card-text>
    </v-card>
</template>