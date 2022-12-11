<script setup lang="ts">
  import { ref } from 'vue';

  import ButtonCounter from './components/ButtonCounter.vue';
  import NavBar from './components/NavBar.vue';
  import { useSettingsStore } from './store/use-settings-store';

  
  
  const settings = useSettingsStore();
</script>

<template>
  <v-app id="inspire" :theme="settings.theme.name" class="todo-app">
    <NavBar />

    <v-main>
      <v-container>
        <v-text-field placeholder="What needs to be done?" variant="solo" />
        <v-btn color="primary">
          Add ToDo
        </v-btn>
      </v-container>
      
    </v-main>
  </v-app>
</template>

<style>
.todo-app {
  background-color: #f1f1f1 !important;
}
</style>