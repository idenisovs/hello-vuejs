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

    function create(title: string) {
        list.value.unshift({
            id: getNextId(),
            userId: 1,
            title,
            completed: false
        });
    }

    function change(changedToDo: ToDo) {
        const idx = list.value.findIndex((item) => item.id === changedToDo.id);

        list.value[idx] = changedToDo;
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

    function getNextId(): number {
        // I know that`s bad idea
        const ids = list.value.map(todo => todo.id);

        return Math.max(...ids) + 1;
    }

    return { isLoading, list, selected, requestToDoList, change, remove, removeSelected, create };
});