import {Box, Image,  } from "@chakra-ui/react";
import "./barraLateral.css"; 

export function BarraLateral() {
    return (
        <Box display="flex" alignItems="center"flexDirection={"column"} bg='#6C63FF' w='8%' h="100vh" color='white'>
        <Image
          boxSize='100px'
          src="/icons/logo.png"
          alt="logo">
        </Image>
        <Box className="icones">
          <Image className="icone"
            id="icone-user"
            marginTop={"200px"}
            src="/icons/user.png"
            alt="user">
          </Image>
          <Image className="icone"
            src="/icons/document.png"
            alt="document">
          </Image>
          <Image className="icone"
            src="/icons/settings.png"
            alt="settings">
          </Image>
        </Box>
      </Box>
    )
}

