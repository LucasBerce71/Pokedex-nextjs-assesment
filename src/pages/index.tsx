import { useEffect, useState } from "react";

import { Flex, Text, Spinner } from "@chakra-ui/react";

import PokemonCard from "../components/PokemonCard";
import Header from "../components/Header";
import Modal from "../components/Modal";

import { searchPokemonContext } from "../contexts/searchPokemonContext";

import { welcomeModalTitle, welcomeModalDescription } from "../constants/mockTexts";
import Loader from "../components/Loader";

export default function Home() {
  const [welcomwModalShow, setWelcomeModalShow] = useState<boolean>(false);

  const { pokemonInfo, isLoading } = searchPokemonContext();

  useEffect(() => {
    setWelcomeModalShow(true);
  }, []);

  return (
    <>
      <Modal
        title={welcomeModalTitle}
        description={welcomeModalDescription}
        isOpen={welcomwModalShow}
        isCentered
        onClose={() => setWelcomeModalShow(false)}
      />
      <Header />

      <Flex w="100%" alignItems="center" justifyContent="center">
        {isLoading ? (
          <Loader />
        ) : pokemonInfo ? (
          <PokemonCard
            imageUrl={pokemonInfo?.sprites?.front_default}
            imageAlt={pokemonInfo?.name}
            title={pokemonInfo?.name || "-"}
            description="Pokemon Description here"
            baseExperience={pokemonInfo?.base_experience}
            type={pokemonInfo?.types[0]?.type?.name}
            height={pokemonInfo?.height}
            weight={pokemonInfo?.weight}
          />

        ) : (
          <Text fontSize="3xl" mt="100">To start, search for a pokemon in the search bar above! 🙂</Text>
        )}
      </Flex>
    </>
  )
}
