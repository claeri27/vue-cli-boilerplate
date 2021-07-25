import { ref, watchEffect } from 'vue'
import type { PokemonList } from '@/types'
import { getPokemonList } from '@/queries'
import { useQuery } from 'vue-query'

export const usePokemonList = () => {
  const pokemonList = ref<PokemonList>()
  const pokemonNames = ref<string[]>([])
  const { data, ...rest } = useQuery<PokemonList, Error>('pokemonList', getPokemonList)

  watchEffect(() => {
    pokemonList.value = data.value
    if (pokemonList.value && !pokemonNames.value[0]) {
      pokemonNames.value = pokemonList.value?.results
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(pokemon => pokemon.name)
    }
  })

  return { pokemonNames, pokemonList, ...rest }
}
