<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-title>
          ToDo
        </v-app-bar-title>
      </template>

      <v-spacer></v-spacer>

      <v-btn variant="flat">
        LV
      </v-btn>

      <v-btn icon="nights_stay" @click="changeTheme"></v-btn>
    </v-app-bar>

    <v-main>
      <div>
        My name is {{name}}
      </div>
      <div>
        Current theme is: {{theme}}
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  const theme = ref('light')

  export default defineComponent({
    props: {
      name: { type: String, required: false, default: 'Hello World' }
    },
    data: () => ({
      drawer: false,
      theme: theme.value
    }),
    methods: {
      changeTheme() {
        theme.value = theme.value === 'light' ? 'dark': 'light';
      }
    },
    mounted() {}
  })
</script>