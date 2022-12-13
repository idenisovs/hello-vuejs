<script setup lang="ts">
    import { ref } from 'vue';

    import ToDoItem from './ToDoItem.vue';
    import { useToDoListStore  } from '../store';
    import { ToDo } from '../dtos';

    const todos = useToDoListStore();
    const selectedTodos = ref<ToDo[]>([]);

    function remove(todo: ToDo) {
        deselect(todo);
        todos.remove(todo);
    }

    function select(todo: ToDo) {
        selectedTodos.value.push(todo);
    }

    function deselect(todo: ToDo) {
        const idx = selectedTodos.value.findIndex((item) => item.id === todo.id);

        if (idx > -1) {
            selectedTodos.value.splice(idx, 1);
        }
    }

    function removeSelected() {
        selectedTodos.value.forEach(todos.remove);
        selectedTodos.value = [];
    }
</script>

<template>
    <ToDoItem v-for="(item, index) in todos.list" 
        :key="item.id"
        :idx="todos.list.length - index" 
        :todo="item" 
        @select="select"
        @deselect="deselect"
        @remove="remove"
    />

    <v-btn block color="primary" class="delete-btn mt-10" v-if="selectedTodos.length > 1" @click="removeSelected">
        Delete selected ({{selectedTodos.length}})
    </v-btn>
</template>

<style scoped>
.delete-btn {
    height: 60px;
}
</style>