import { Image, Heading, Text, Box, Flex, Center } from "@chakra-ui/react";
import './App.css'
import { BarraLateral} from "./components/barraLateral/barraLateral";
import { TituloAvaliacao } from "./components/tituloAvaliacao/tituloAvaliacao";
import { PerguntaAvaliacao } from "./components/perguntaAvaliacao/perguntaAvaliacao";

function App() {
  return (
    <Flex width={"100vw"} height={"100vh"} backgroundColor={"#202020"}>
      <BarraLateral/>
      <TituloAvaliacao/>
      <PerguntaAvaliacao/>
    </Flex>
  )
}

export default App
