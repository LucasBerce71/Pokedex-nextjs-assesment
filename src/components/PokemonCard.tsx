import React from "react";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ICardProps } from "../interfaces/components/Card";

const PokemonCard: React.FC<ICardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  baseExperience,
  type,
  height,
  weight
}) => {

  return (
    <Flex p={8} mt={40}>
      <Box 
        maxW='sm' 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
        _hover={{
          transform: "scale(1.1)"
        }}
        transition=".4s"
        cursor="pointer"
      >
        <Image src={imageUrl} alt={imageAlt} w="15rem" />
        <Box p='6'>
          <Text fontWeight='bold' as='h4'>{title.toUpperCase()}</Text>
          <Text>Description: {description || "-"}</Text>
          <Text>Base Experience: {baseExperience || "-"}</Text>
          <Text>Type: {type || "-"}</Text>
          <Text>Height: {height || "-"}</Text>
          <Text>Weight: {weight || "-"}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default PokemonCard;