<script setup lang="ts">
  import { ref } from 'vue';

  import ButtonCounter from './components/ButtonCounter.vue';
  import NavBar from './components/NavBar.vue';
  import ToDoAdd from './components/TodoAdd.vue';

  import { useSettingsStore } from './store/use-settings-store';
  
  const settings = useSettingsStore();
</script>

<template>
  <v-app id="inspire" :theme="settings.theme.name" class="todo-app">
    <NavBar />

    <v-main class="todo-main">
      <ToDoAdd />
    </v-main>
  </v-app>
</template>
