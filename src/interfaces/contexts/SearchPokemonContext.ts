import { IPokemon } from "../entities/Pokemon";

export interface ISearchPokemonContextData {
  pokemonInfo: IPokemon | undefined;
  updatePokemonFromContext: (newPokemon: IPokemon | any) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};