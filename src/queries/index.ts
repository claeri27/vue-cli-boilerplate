import { simpleFetch } from '@/utils'

export const getPokemonList = () => {
  return simpleFetch('https://pokeapi.co/api/v2/pokemon/?limit=893')
}

export const getPokemonByName = (name: string) => {
  return simpleFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
}
