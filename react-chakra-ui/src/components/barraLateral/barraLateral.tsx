import { Box, Image } from "@chakra-ui/react";
import "./barraLateral.css";

export function BarraLateral() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={"column"}
      bg='#6C63FF'
      width='8%'
      height="100vh" // Definindo a altura como 100vh
      color='white'
    >
      <Image
        boxSize='100px'
        src="/icons/logo.png"
        alt="logo"
      />
      <Box className="icones">
        <Image
          className="icone"
          id="icone-user"
          marginTop={"20vh"} // Ajustando a margem superior para manter a posição relativa
          src="/icons/user.png"
          alt="user"
        />
        <Image
          className="icone"
          src="/icons/document.png"
          alt="document"
        />
        <Image
          className="icone"
          src="/icons/settings.png"
          alt="settings"
        />
      </Box>
    </Box>
  )
}
