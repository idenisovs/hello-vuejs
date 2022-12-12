<script setup lang="ts">
    import { ref } from 'vue';

    import ToDoItem from './ToDoItem.vue';

    const message = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!');
</script>

<template>
    <ToDoItem :message="message" />
</template>