interface IPokemonAblity {
  ability: { name: string };
};

interface IPokemonType {
  type: { name: string };
};

export interface IPokemon {
  id: number;
  abilities: Array<IPokemonAblity>;
  base_experience: number;
  height: number;
  weight: number;
  name: string;
  types: Array<IPokemonType>;
  sprites: {
    front_default: string;
  }
};