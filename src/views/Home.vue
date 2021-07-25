<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ count }}</p>
    <p v-if="count > 10">Higher than 10!</p>
    <p v-if="count > 100">Higher than 100!</p>
    <button class="counter-button" @click="toggleTheme()">Toggle theme</button>
    <button class="counter-button" @click="add()">+1</button>
    <button class="counter-button" @click="subtract()">-1</button>
    <button class="counter-button" @click="multiply()">Double Count</button>
    <button class="counter-button" @click="divide()">Divide Count</button>
    <button class="counter-button" @click="reset()">Reset</button>
    <div class="pokemon-list">
      <span class="pokemon-button" v-for="(name, index) in pokemonNames" :key="index">
        {{ name }}
      </span>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { usePokemonList, useCounter, useTheme } from '@/hooks'

export default defineComponent({
  name: 'Home',
  components: { HelloWorld },
  setup() {
    const { pokemonNames } = usePokemonList()
    const counter = useCounter()
    const theme = useTheme()
    return { pokemonNames, ...counter, ...theme }
  },
})
</script>

<style scoped lang="scss">
.pokemon-list {
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  flex-wrap: wrap;
}
.counter-button {
  padding: 1rem;
  width: 10rem;
  margin: 0rem 1rem;
  cursor: pointer;
}
.pokemon-button {
  background: var(--blue);
  text-transform: capitalize;
  width: 8rem;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  color: white;
}
</style>
