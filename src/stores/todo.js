import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import todoApi from '../api/todo'

export const useTodoStore = defineStore('todo', () => {
  const store = ref({
      eunchae: {
        items: []
      },
      sejun: {
        items: []
      }
  })

  async function getList(userId) {

  }

  return { useTodoStore, getList }
})
