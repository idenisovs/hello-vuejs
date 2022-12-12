import { ref } from 'vue';
import { defineStore } from 'pinia';

import { ToDo } from '../dtos';
import { ToDo as ToDoApi } from '../api';

export const useToDoListStore = defineStore('todo-list', () => {
    const isLoading = ref(false);

    const list = ref<ToDo[]>([]);

    function requestToDoList() {
        isLoading.value = true;

        ToDoApi.getAll().then((response) => {
            list.value = response;
            isLoading.value = false;
        });
    }

    function remove(todo: ToDo) {
        const idx = list.value.findIndex((item) => item.id === todo.id);

        if (idx === -1) {
            return;
        }

        list.value.splice(idx, 1);
    }

    return { isLoading, list, requestToDoList, remove };
});