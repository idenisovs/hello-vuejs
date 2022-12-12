<script setup lang="ts">
    import { ref } from 'vue';

    import ToDoItem from './ToDoItem.vue';
    import { useToDoListStore  } from '../store';
    import { ToDo } from '../dtos';

    const todos = useToDoListStore();
</script>

<template>
    <ToDoItem v-for="(item, index) in todos.list" :idx="todos.list.length - index" :todo="item" />
</template>