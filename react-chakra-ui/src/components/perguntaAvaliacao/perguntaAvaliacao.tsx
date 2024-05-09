import {Box, Image, Center, Input } from "@chakra-ui/react";
import "./perguntaAvaliacao.css"; 
import Dropdown from "../dropDown/dropDown";

export function PerguntaAvaliacao() {
    return (
      <Center borderRadius='lg' bg='#ffffff' w="60vw" h="16rem"  position={"absolute"} top={"350px"} left={"300px"}>
        <Input position={"absolute"} left={"50px"} top={"40px"} color="#7A72FF"  fontSize={"1.5rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Título da Pergunta' w={"450px"} h={"60px"}/>
        
        <Input position={"absolute"} left={"50px"} top={"120px"} color="#7A72FF"  fontSize={"1.2rem"}  _placeholder={{ opacity: 0.8, color: 'inherit' }} variant='outline' placeholder='Opção 1' w={"350px"} h={"50px"}/>
        <Dropdown 
         options={["Múltipla escolha", "Pergunta aberta"]} 
        onSelect={(selectedOption: string) => console.log("Opção selecionada:", selectedOption)} 
        style={{ position: "absolute", left: "75%", top: "40px", width:"22%"}}
/>

      </Center>
    )
}

