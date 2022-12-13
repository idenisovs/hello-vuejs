import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { ToDo } from '../dtos';
import { ToDo as ToDoApi } from '../api';

export const useToDoListStore = defineStore('todo-list', () => {
    const isLoading = ref(false);

    const list = ref<ToDo[]>([]);

    const selected = computed(() => {
        return list.value.reduce((result, item) => {
            return item.completed ? result + 1 : result;
        }, 0);
    });

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

    function removeSelected() {
        list.value = list.value.filter((item) => !item.completed);
    }

    return { isLoading, list, selected, requestToDoList, remove, removeSelected };
});