<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-title>
          ToDo
        </v-app-bar-title>
      </template>

      <v-spacer></v-spacer>

      <v-btn>
        LV
      </v-btn>

      <v-btn @click="changeTheme">
        <v-icon icon="nights_stay" />
      </v-btn>
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