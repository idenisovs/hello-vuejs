<script setup lang="ts">
  import { ref } from 'vue';

  import { ToDoAdd, ToDoList, NavBar } from './components';

  import { useSettingsStore, useToDoListStore } from './store';
  
  const settings = useSettingsStore();
  const todos = useToDoListStore();

  todos.requestToDoList();
</script>

<template>
  <v-app id="inspire" class="todo-app" :theme="settings.theme.name">
    <NavBar />

    <v-main class="todo-main" >
      <ToDoAdd />
      <v-progress-linear v-if="todos.isLoading" color="#00bcd4" indeterminate :height="12"></v-progress-linear>
      <ToDoList v-else />
    </v-main>
  </v-app>
</template>
