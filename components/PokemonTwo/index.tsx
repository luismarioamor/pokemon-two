import React, { useEffect } from "react";
import { pokemonStore } from "@/store";
import dynamic from "next/dynamic";

const CardPokemon = dynamic(() => import("hostShell/card"), {
  ssr: false,
  suspense: true,
  loading: () => <p>Loading...</p>,
});

export default function PokemonTwo() {
  const { getPokemon, pokemon, pokemonSpecies } = pokemonStore(
    (state) => state
  );

  useEffect(() => {
    getPokemon();
    window.addEventListener("buttonClicked", getPokemon);
    return () => {
      window.removeEventListener("buttonClicked", getPokemon);
    };
  }, [getPokemon]);

  return (
    <CardPokemon
      src={pokemon.sprites?.other?.["official-artwork"]?.front_default || ""}
      bgColorCard={pokemonSpecies?.color?.name || "all"}
      pokemon={pokemon}
      pokemonSpecies={pokemonSpecies}
    />
  );
}
