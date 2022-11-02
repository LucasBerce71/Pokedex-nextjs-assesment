import React, { createContext, useContext, useState } from "react";

import { ISearchPokemonContextData } from "../interfaces/contexts/SearchPokemonContext";
import { IPokemon } from "../interfaces/entities/Pokemon";
import { IReactChildrenProps } from "../interfaces/ReactChildren";

const SearchPokemonContext = createContext<ISearchPokemonContextData>(
  {} as ISearchPokemonContextData
);

const SearchPokemonProvider: React.FC<IReactChildrenProps> = ({ children }) => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updatePokemonFromContext = (newPokemon: IPokemon) => {
    setPokemonInfo(newPokemon);
  };

  return (
    <SearchPokemonContext.Provider
      value={{
        pokemonInfo,
        updatePokemonFromContext,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SearchPokemonContext.Provider>
  );
};

const searchPokemonContext = (): ISearchPokemonContextData => {
  const context = useContext(SearchPokemonContext);

  if (!context) {
    throw new Error("researchPokemonContext must be used within an ResearchPokemonProvider");
  }

  return context;
};

export { SearchPokemonProvider, searchPokemonContext };