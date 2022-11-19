<script setup>
import Todo from '/src/components/Todo.vue'
</script>

<template>
  <main>
    <Todo
        :username="'eunchae'"
    />

    <Todo
        :username="'sejun'"
    />
  </main>
</template>
