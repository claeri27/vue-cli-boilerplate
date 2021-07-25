import { ref } from 'vue'

export const useCounter = () => {
  const count = ref(0)

  return {
    count,
    add: (num = 1) => (count.value += num),
    subtract: (num = 1) => (count.value -= num),
    multiply: (num = 2) => (count.value *= num),
    divide: (num = 2) => (count.value /= num),
    reset: () => (count.value = 0),
  }
}
