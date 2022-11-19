<template>
  <div>{{ props.username }}</div>

</template>

<script setup>
import { defineAsyncComponent } from "vue";
// const TodoList = defineAsyncComponent(() => {
//   import('../components/TodoList.vue')
// })

const props = defineProps({
  username: String
})

</script>

<style scoped>

</style>
