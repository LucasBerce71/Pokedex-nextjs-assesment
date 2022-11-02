import React, { useState } from 'react';

import { Flex, Icon, Input, Text } from '@chakra-ui/react';

import { SiPokemon } from 'react-icons/si';
import { CgPokemon } from 'react-icons/cg';

import { searchPokemonContext } from '../contexts/searchPokemonContext';

import { api } from '../services/api.config';

import { IPokemon } from '../interfaces/entities/Pokemon';

import axios from "axios";

import Modal from './Modal';

import { modalRequestErrorNoContentSearchPokemonTitle, modalRequestErrorSearchNoContentPokemonDescription, modalRequestErrorSearchPokemonDescription, modalRequestErrorSearchPokemonTitle } from '../constants/mockTexts';

const Header: React.FC = () => {
  const [pokemonInputValue, setPokemonInputValue] = useState<string>("");
  const [modalRequestErrorShow, setModalRequestErrorShow] = useState<boolean>(false);
  const [modalRequestErrorNoContentShow, setModalRequestErrorNoContentShow] = useState<boolean>(false);

  const { updatePokemonFromContext, setIsLoading } = searchPokemonContext();

  const handleChangePokemonInputValue = (pokemon: string) => {
    setPokemonInputValue(pokemon);
  };

  const handleSearchPokemon = async () => {
    if (pokemonInputValue) {
      try {
        setIsLoading(true);
        const response = await api.get<IPokemon>(`pokemon/${pokemonInputValue.toLowerCase()}`);
        updatePokemonFromContext(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status !== 200) {
          setModalRequestErrorShow(true);
        }
      } finally {
        setIsLoading(false);
        setPokemonInputValue("");
      }
    } else {
      setPokemonInputValue("");
      setModalRequestErrorNoContentShow(true);
    }
  };

  return (
    <Flex as="header" w="100%" mx="auto" mt="4" px="6" align="center">
      <Modal
        title={modalRequestErrorSearchPokemonTitle}
        description={modalRequestErrorSearchPokemonDescription}
        isOpen={modalRequestErrorShow}
        onClose={() => setModalRequestErrorShow(false)}
      />

      <Modal
        title={modalRequestErrorNoContentSearchPokemonTitle}
        description={modalRequestErrorSearchNoContentPokemonDescription}
        isOpen={modalRequestErrorNoContentShow}
        onClose={() => setModalRequestErrorNoContentShow(false)}
      />
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
        <Icon
          as={SiPokemon}
          ml="16"
          fontSize={100}
          cursor="pointer"
          _hover={{
            transform: "rotate(10deg) scale(2.5)",
          }}
          transition=".2s"
        />
      </Text>

      <Flex
        as="label"
        flex="1"
        py='4'
        px='8'
        ml='6'
        maxW={400}
        alignSelf='center'
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Search your pokemon here"
          value={pokemonInputValue}
          onChange={event => handleChangePokemonInputValue(event.target.value)}
        />
        <Icon
          as={CgPokemon}
          fontSize="26"
          cursor="pointer"
          _hover={{
            transform: "rotate(180deg) scale(1.8)",
          }}
          transition=".3s"
          onClick={handleSearchPokemon}
        />
      </Flex>
    </Flex>
  );
};

export default Header;