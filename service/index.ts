import axios from "axios";

class PokemonService {
  async getPokemonList() {
    const pokemon = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1302"
    );
    return pokemon.data;
  }
  async getPokemonByName(name: string) {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return pokemon.data;
  }
  async getPokemonSpecies(id: string) {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    return pokemon.data;
  }
}

const pokemonService = new PokemonService();

export default pokemonService;
