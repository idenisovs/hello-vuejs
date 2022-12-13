<script setup lang="ts">
import { ref } from 'vue';

import { useToDoListStore  } from '../store';

const todos = useToDoListStore();
const toDoText = ref('');

function createToDo() {
    if (!toDoText.value.length) {
        return;
    }

    todos.create(toDoText.value);
    toDoText.value = '';
}
</script>

<template>
    <div class="todo-add">
        <v-text-field variant="solo" type="input" placeholder="What needs to be done?" class="mr-5" v-model="toDoText" @keyup.enter="createToDo"></v-text-field>
        <v-btn color="primary" class="add-btn" :disabled="!toDoText.length" @click="createToDo">
            Add ToDo
        </v-btn>
    </div>
</template>

<style scoped>
.todo-add {
    display: flex;
    margin-bottom: 30px;
    margin-top: 50px;
}

.todo-add .add-btn {
    height: 56px;
}
</style>
