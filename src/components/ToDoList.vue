<script setup lang="ts">
    import { ref } from 'vue';

    import ToDoItem from './ToDoItem.vue';
    import { useToDoListStore  } from '../store';
    import { ToDo } from '../dtos';

    const todos = useToDoListStore();
</script>

<template>
    <ToDoItem v-for="(item, index) in todos.list" 
        :key="item.id"
        :idx="todos.list.length - index" 
        :todo="item" 
        @select="todos.select"
        @deselect="todos.deselect"
        @remove="todos.remove"
    />

    <v-btn block color="primary" class="delete-btn mt-10" v-if="todos.selected.length > 1" @click="todos.removeSelected">
        Delete selected ({{todos.selected.length}})
    </v-btn>
</template>

<style scoped>
.delete-btn {
    height: 60px;
}
</style>