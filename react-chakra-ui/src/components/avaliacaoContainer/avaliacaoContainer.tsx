import { Box, Center, Input } from "@chakra-ui/react";
import Dropdown from "../dropDown/dropDown";

export function AvaliacaoContainer() {
  return (
    <Box>
      <TituloAvaliacao />
      <PerguntaAvaliacao />
    </Box>
  );
}

export function TituloAvaliacao() {
  return (
    <Center borderRadius='lg' bg='#ffffff' w="60vw" h="12rem" display={"flex"} position={"relative"} top={"100px"} left={"10%"}>
      <Input position={"absolute"} left={"50px"} top={"40px"} color="#6C63FF" fontSize={"2rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} focusBorderColor={"#6C63FF"} variant='flushed' placeholder='Título da Avaliação' w={"50%"} />
      <Input position={"absolute"} left={"55px"} top={"120px"} color="#6C63FF" fontSize={"16px"}  _placeholder={{ opacity: 0.4, color: 'inherit' }} focusBorderColor={"#6C63FF"} variant='flushed' placeholder='Descrição do Formulário' w={"30%"} />
    </Center>
  );
}

export function PerguntaAvaliacao() {
  return (
    <Center borderRadius='lg' bg='#ffffff' w="60vw" h="16rem" display={"flex"} position={"relative"} top={"200px"} left={"10%"} >
      <Input position={"absolute"} left={"50px"} top={"40px"} color="#7A72FF" fontSize={"1.5rem"} _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Título da Pergunta' w={"450px"} h={"60px"} />

      <Input position={"absolute"} left={"50px"} top={"120px"} color="#7A72FF" fontSize={"1.2rem"} _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Opção 1' w={"350px"} h={"50px"} />
      <Dropdown
        options={["Múltipla escolha", "Pergunta aberta"]}
        onSelect={(selectedOption: string) => console.log("Opção selecionada:", selectedOption)}
      />
    </Center>
  );

  /* import { useState } from "react";
     import { Box, Button, Flex, Input, ChakraProvider } from "@chakra-ui/react";

      export function AdicionarPergunta() {
        const [fields, setFields] = useState([{ id: 0 }]);

        const addField = () => {
          const lastField = fields[fields.length - 1];
          const newId = lastField.id + 1;
          setFields([...fields, { id: newId }]);
        };

        const removeField = (idToRemove) => {
          setFields(fields.filter(field => field.id !== idToRemove));
        };

  return (
    <ChakraProvider>
      <Flex direction="column" position="relative" top="4vh" right="25vw">
        <Box overflowY="auto">
          {fields.map((field, index) => (
            <Box display="flex" key={index} mt={4}>
              <Input
                position={"relative"}
                color="#7A72FF"
                fontSize={"1.2rem"}
                _placeholder={{ opacity: 0.8, color: 'inherit' }}
                variant='outline'
                placeholder={`Opção ${field.id + 1}`}
                w={"350px"}
                h={"50px"}
              />
              {fields.length > 1 && (
                <Button ml={2} onClick={() => removeField(field.id)} >
                  Excluir
                </Button>
              )}
            </Box>
          ))}
          <Button mt={4} onClick={addField}>
            Adicionar Campo
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  ); */
}


