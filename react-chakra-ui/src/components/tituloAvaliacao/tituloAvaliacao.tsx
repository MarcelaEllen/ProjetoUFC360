import {Box, Image, Center, Input } from "@chakra-ui/react";
import "./tituloAvaliacao.css"; 

export function TituloAvaliacao() {
    return (
      <Center borderRadius='lg' bg='#ffffff' w="1000px" h="12rem" display={"flex"} position={"absolute"} top={"100px"} left={"300px"}>
        <Input position={"absolute"} left={"50px"} top={"40px"} color="#6C63FF" fontSize={"2rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} focusBorderColor={"#6C63FF"} variant='flushed' placeholder='Título da Avaliação' w={"500px"} />
        <Input position={"absolute"} left={"55px"} top={"120px"} color="#6C63FF" fontSize={"16px"}  _placeholder={{ opacity: 0.4, color: 'inherit' }} focusBorderColor={"#6C63FF"} variant='flushed' placeholder='Descrição do Formulário' w={"250px"} />
      </Center>
    )
}

