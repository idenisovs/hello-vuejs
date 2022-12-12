<script setup lang="ts">
  import { ref } from 'vue';

  import { ToDoAdd, ToDoList, NavBar } from './components';

  import { useSettingsStore } from './store/use-settings-store';
  
  const settings = useSettingsStore();
</script>

<template>
  <v-app id="inspire" :theme="settings.theme.name" class="todo-app">
    <NavBar />

    <v-main class="todo-main">
      <ToDoAdd />
      <ToDoList />
    </v-main>
  </v-app>
</template>
