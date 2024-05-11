import { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

interface AdicionarPerguntaProps {
  atualizarAltura: (novaAltura: string) => void; // Função para atualizar a altura do container
}

export function AdicionarPergunta({ atualizarAltura }: AdicionarPerguntaProps) {
  const [fields, setFields] = useState([0]);

  const addField = () => {
    setFields([...fields, fields.length]);
    atualizarAltura(`${18 + (fields.length + 1) * 3}rem`); // Atualizando a altura do container
  };

  const removeField = (indexToRemove: number) => {
    setFields(fields.filter((_, index) => index !== indexToRemove));
    atualizarAltura(`${16 + (fields.length - 1) * 3}rem`); // Atualizando a altura do container
  };

  return (
    <Flex direction="column" position="relative" top={"18vh"} left="3.1vw" w={"50%"} height={"50%"}>
    <Box overflowY="initial">
      {fields.map((field, index) => (
        <Box display="flex" key={index} mt={index > 0 ? 4 : 0}  >
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <FontAwesomeIcon icon={faCircle} style={{color: "#7a72ff",}} />
            <Input marginLeft="1rem"position={"relative"} color="#7A72FF"  fontSize={"1.2rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='flushed' placeholder={`Opção ${index + 1}`} w={"20rem"} h={"50px"}/>
          </div>
          {fields.length > 1 && (
          <Button bg="transparent"  position={"relative"} marginTop="0.8rem" color="#E05263" fontFamily={"Poppins, San-serif.200"}ml={2} onClick={() => removeField(index)} >
            <CloseIcon w="0.8rem"  color={"#E05263"}/>
            <Text fontSize='md' fontFamily={"Poppins, San-serif.200"} color="#E05263" marginLeft={"10px"}> Excluir Resposta</Text>
          </Button>)}
        </Box>
      ))}
      <Button bg="transparent" position="relative" mt={4} onClick={addField}>
        <AddIcon w="0.8rem"  color={"#7A72FF"}/> 
        <Text fontSize='md' fontFamily={"Poppins, San-serif.200"} color="#7A72FF" marginLeft={"10px"}> Adicionar resposta</Text>
      </Button>
    </Box>
  </Flex>
  );
}
