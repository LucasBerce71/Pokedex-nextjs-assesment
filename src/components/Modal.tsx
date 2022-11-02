import React from "react";

import { 
  Button,
  Text,
  Modal as ChakraModal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  useDisclosure 
} from '@chakra-ui/react';

import { IModalProps } from "../interfaces/components/Modal";

const Modal: React.FC<IModalProps> = ({ 
  onClose,
  isOpen, 
  isCentered, 
  title, 
  description 
}) => {
  return (
    <ChakraModal 
      onClose={onClose} 
      isOpen={isOpen} 
      isCentered={isCentered || true}
    >
      <ModalOverlay />
      <ModalContent bg='blue.800'>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {description}
        </ModalBody>
        <ModalFooter>
          <Button bg='blue.400' onClick={onClose}>
            <Text color='white'>OK</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;