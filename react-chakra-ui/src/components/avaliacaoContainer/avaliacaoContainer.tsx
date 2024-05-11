import { useState } from "react";
import { Box, Center, Input } from "@chakra-ui/react";
import Dropdown from "../dropDown/dropDown";
import { AdicionarPergunta } from "../adicionarPergunta/adicionarPergunta";

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
  const [altura, setAltura] = useState("20rem"); // Estado para controlar a altura do container

  const atualizarAltura = (novaAltura: string) => {
    setAltura(novaAltura);
  };

  return (
    <Box borderRadius='lg' bg='#ffffff' w="60vw" h={altura} display={"flex"} position={"relative"} top={"20%"} left={"10%"} >
      <Input position={"absolute"} left={"50px"} top={"40px"} color="#7A72FF" fontSize={"1.5rem"} _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Título da Pergunta' w={"30rem"} h={"4rem"} />

      <AdicionarPergunta atualizarAltura={atualizarAltura} /> {/* Passando a função de atualização da altura */}

      <Dropdown
        options={["Múltipla escolha", "Pergunta aberta"]}
        onSelect={(selectedOption: string) => console.log("Opção selecionada:", selectedOption)}
        />
    </Box>
  );
}
