<style scoped>
.todo-add {
    display: flex;
    margin-bottom: 30px;
    margin-top: 50px;
}

.todo-add .add-btn {
    height: 56px;
}
</style>

<template>
    <div class="todo-add">
        <v-text-field variant="solo" type="input" class="mr-5"></v-text-field>
        <v-btn color="primary" class="add-btn">
            Add ToDo
        </v-btn>
    </div>
</template>

