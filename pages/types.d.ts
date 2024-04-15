declare module "hostShell/card" {
  import React from "react";
  import { IPokemon, IPokemonSpecies } from "@/types";

  interface IProps {
    src: string;
    bgColorCard: string;
    pokemon: IPokemon;
    pokemonSpecies: IPokemonSpecies;
    dataTestId: string;
  }

  const CardPokemon: React.FC<IProps>;
  export default CardPokemon;
}

declare module "pokemonTwo/pokemonTwo" {
  import React from "react";
  const PokemonTwo: React.FC<{}>;
  export default PokemonTwo;
}
