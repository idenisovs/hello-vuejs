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
</script>

<template>
    <ToDoItem v-for="(item, index) in todos.list" 
        :idx="todos.list.length - index" 
        :todo="item" 
        @select="select"
        @deselect="deselect"
        @remove="remove"
    />
    
    <div>
        Selected: {{selectedTodos.length}}
    </div>
</template>