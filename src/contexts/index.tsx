import React, { ReactNode } from "react";

import { IReactChildrenProps } from "../interfaces/ReactChildren";
import { SearchPokemonProvider } from "./searchPokemonContext";

export const GlobalProvider: React.FC<IReactChildrenProps> = ({ children }) => {
  return (
    <SearchPokemonProvider>
      {children}
    </SearchPokemonProvider>
  );
};