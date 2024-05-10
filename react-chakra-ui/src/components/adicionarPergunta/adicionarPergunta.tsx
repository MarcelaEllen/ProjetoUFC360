import { useState } from "react";
import { Box, Button, ChakraProvider, Flex, Input } from "@chakra-ui/react";

export function AdicionarPergunta() {
  const [fields, setFields] = useState([0]);

  const addField = () => {
    setFields([...fields, fields.length]);
  };

  const removeField = (indexToRemove: number) => {
    setFields(fields.filter((_, index) => index !== indexToRemove));
  
  };




  return (
    <Flex direction="column" position="relative" top="4vh" right="25vw">
      <Box overflowY="initial">
        {fields.map((field, index) => (
          <Box display="flex" key={index} mt={4} >
            <Input position={"relative"} marginTop="2rem" color="#7A72FF"  fontSize={"1.2rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Opção 1' w={"350px"} h={"50px"}/>
            {fields.length > 1 && (
            <Button ml={2} onClick={() => removeField(index)} >
              Excluir
            </Button>)}
          </Box>
        ))}
        <Button mt={4} onClick={addField}>
          Adicionar Campo
        </Button>
      </Box>
    </Flex>
  );
}