import {Box, Image, Center, Input } from "@chakra-ui/react";
import "./perguntaAvaliacao.css"; 

export function PerguntaAvaliacao() {
    return (
      <Center borderRadius='lg' bg='#ffffff' w="1000px" h="16rem" display={"flex"} position={"absolute"} top={"350px"} left={"300px"}>
        <Input position={"absolute"} left={"50px"} top={"40px"} color="#7A72FF"  fontSize={"1.5rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Título da Pergunta' w={"450px"} h={"60px"}/>
        
        <Input position={"absolute"} left={"50px"} top={"120px"} color="#7A72FF"  fontSize={"1.2rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Opção 1' w={"350px"} h={"50px"}/>
      </Center>
    )
}

