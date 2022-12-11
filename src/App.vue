<script setup lang="ts">
  import { ref } from 'vue';

  import ButtonCounter from './components/ButtonCounter.vue';
  
  const drawer = ref(false);
  const theme = ref('light');
</script>

<template>
  <v-app id="inspire" :theme="theme">
    <v-app-bar image="vbanner.jpg">
      <template v-slot:prepend>
        <v-app-bar-title class="text-white">
          ToDo
        </v-app-bar-title>
      </template>

      <v-btn variant="text" color="white" icon>
        LV
      </v-btn>

      <v-btn variant="text" color="white" icon="nights_stay"></v-btn>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>