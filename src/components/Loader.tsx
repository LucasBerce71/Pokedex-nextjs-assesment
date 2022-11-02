import React from "react";

import { Flex, Text, Spinner } from "@chakra-ui/react";
import { ILoaderProps } from "../interfaces/components/Loader";

export const Loader: React.FC<ILoaderProps> = ({ loaderText }) => {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center" mt={40}>
      <Spinner size="xl" />
      <Text mt={8} fontSize={20}>
        {loaderText || "Great pokemon pick, wait while I load his info for you."}
      </Text>
    </Flex>
  );
};

export default Loader;