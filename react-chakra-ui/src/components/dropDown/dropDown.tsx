import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <Box position="relative">
      <Select
        fontFamily={"Poppins, San-serif"}
        value={selectedOption || ""}
        onChange={handleSelectChange}
        placeholder="Selecione uma opção"
        borderColor="gray.200"
        borderRadius="md"
        p={2}
        cursor="pointer"
        position="relative"
        left={"12rem"}
        top={"2rem"}
        color={"#6C63FF"}
        fontSize={"16px"}  
        _placeholder={{ opacity: 0.8, color: 'inherit' }} 
        focusBorderColor={"#6C63FF"}
        display={"flex"}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default Dropdown;