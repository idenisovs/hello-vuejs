<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { useToDoListStore  } from '../store';

const todos = useToDoListStore();
const toDoText = ref('');
const { t } = useI18n();

function createToDo() {
    if (!toDoText.value.length) {
        return;
    }

    todos.create(toDoText.value);
    toDoText.value = '';
}
</script>

<template>
    <div class="todo-add d-flex flex-column flex-sm-row">
        <v-text-field 
            variant="solo" 
            type="input" 
            :placeholder="t('add-todo-placeholder')" 
            hide-details
            class="mb-5 mb-sm-0 mr-0 mr-sm-2 mr-md-5" 
            v-model="toDoText" 
            @keyup.enter="createToDo"
        >
        </v-text-field>

        <v-btn color="primary" class="add-btn" :disabled="!toDoText.length" @click="createToDo">
            {{t('add-todo')}}
        </v-btn>
    </div>
</template>

<style scoped>
.todo-add {
    margin-bottom: 30px;
    margin-top: 50px;
}

.todo-add .add-btn {
    height: 56px;
}
</style>
