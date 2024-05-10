import { Image, Heading, Text, Box, Flex, Center } from "@chakra-ui/react";
import './App.css'
import { BarraLateral} from "./components/barraLateral/barraLateral";
import { AvaliacaoContainer } from "./components/avaliacaoContainer/avaliacaoContainer";

function App() {
  return (
    <Flex width={"100vw"} height={"100vh"} backgroundColor={"#202020"}>
      <BarraLateral/>
      <AvaliacaoContainer/>     
    </Flex>
  )
}

export default App
