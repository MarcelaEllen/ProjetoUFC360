import React, { useState, CSSProperties } from "react";
import {
  Box,
  Text,
  Flex,
  VStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  style?: CSSProperties; // Adicionando a propriedade style
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, style }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    onToggle();
  };

  return (
    <Flex direction="column" position="relative" style={style}> {/* Aplicando o estilo */}
      <Box
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        p={2}
        cursor="pointer"
        onClick={onToggle}
      >
        <Text>{selectedOption || "Selecione uma opção"}</Text>
        <IconButton
          icon={<MdArrowDropDown />}
          aria-label="Open dropdown"
          size="sm"
          position="absolute"
          top="50%"
          right="4px"
          transform="translateY(-50%)"
          pointerEvents="none"
        />
      </Box>
      {isOpen && (
        <Box
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          mt={2}
          boxShadow="sm"
          position="absolute"
          zIndex="1"
        >
          <VStack align="stretch" spacing={0}>
            {options.map((option, index) => (
              <Box
                key={index}
                p={2}
                _hover={{ bg: "gray.100" }}
                onClick={() => handleOptionClick(option)}
                cursor="pointer"
              >
                {option}
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </Flex>
  );
};

export default Dropdown;
