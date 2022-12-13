import { ref } from 'vue';
import { defineStore } from 'pinia';

import { ToDo } from '../dtos';
import { ToDo as ToDoApi } from '../api';

export const useToDoListStore = defineStore('todo-list', () => {
    const isLoading = ref(false);

    const list = ref<ToDo[]>([]);
    const selected = ref<ToDo[]>([])

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

    function removeAndDeselect(todo: ToDo) {
        remove(todo);
        deselect(todo);
    }

    function select(todo: ToDo) {
        selected.value.push(todo);
    }

    function deselect(todo: ToDo) {
        const idx = selected.value.findIndex((item) => item.id === todo.id);

        if (idx > -1) {
            selected.value.splice(idx, 1);
        }
    }

    function removeSelected() {
        selected.value.forEach(remove);
        selected.value = [];
    }

    return { isLoading, list, selected, requestToDoList, remove: removeAndDeselect, select, deselect, removeSelected };
});