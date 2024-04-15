import { IPokemon, IPokemonSpecies } from "@/types";
import { create } from "zustand";
import pokemonService from "@/service";
import _ from "lodash";

interface IPokemonStore {
  getPokemon: () => Promise<void>;
  pokemon: IPokemon;
  pokemonSpecies: IPokemonSpecies;
}

export const pokemonStore = create<IPokemonStore>((set) => ({
  pokemon: {} as IPokemon,
  pokemonSpecies: {} as IPokemonSpecies,
  getPokemon: async () => {
    try {
      const response = await pokemonService.getPokemonList();
      const randomIndex = _.random(0, response.results.length - 1);
      const responsePokemon = await pokemonService.getPokemonByName(
        response.results[randomIndex]?.name
      );
      set((state) => ({ ...state, pokemon: responsePokemon }));
      if (!_.isEmpty(responsePokemon.species?.url)) {
        const idSplit = responsePokemon.species?.url.split("/")[6];
        const responseSpecies = await pokemonService.getPokemonSpecies(idSplit);
        set((state) => ({ ...state, pokemonSpecies: responseSpecies }));
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  },
}));
