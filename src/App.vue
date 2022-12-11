<script setup lang="ts">
  import { ref } from 'vue';

  import ButtonCounter from './components/ButtonCounter.vue';
  import NavBar from './components/NavBar.vue';

  import { useSettingsStore } from './store/use-settings-store';
  
  const settings = useSettingsStore();
</script>

<template>
  <v-app id="inspire" :theme="settings.theme.name">
    <NavBar />

    <v-main>
      <div>
        Current theme is <strong>{{settings.theme.name}}</strong>.
      </div>
      <div>
        Current language is <strong>{{settings.language}}</strong>
      </div>
    </v-main>
  </v-app>
</template>