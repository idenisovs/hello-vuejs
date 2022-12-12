import { ref } from 'vue';
import { defineStore } from 'pinia';

import { ToDo } from '../dtos';
import { ToDo as ToDoApi } from '../api';

export const useToDoListStore = defineStore('todo-list', () => {
    const isLoading = ref(false);

    const todos = ref<ToDo[]>([]);

    function requestToDoList() {
        isLoading.value = true;

        ToDoApi.getAll().then((response) => {
            todos.value = response;
            isLoading.value = false;
        });
    }

    return { isLoading, todos, requestToDoList };
});