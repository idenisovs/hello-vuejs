<script setup lang="ts">
    import { ref } from 'vue';

    import ToDoItem from './ToDoItem.vue';
    import { useToDoListStore  } from '../store';

    const todos = useToDoListStore();
</script>

<template>
    <ToDoItem v-for="todo in todos.todos" :todo="todo" />
</template>