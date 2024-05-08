import * as React from 'react'
import './App.css'
import { Input } from '@chakra-ui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <label htmlFor="">E-mail</label>
      <ChakraBaseProvider theme={theme}>
        <Input variant='outline' placeholder='Outline' />
      </ChakraBaseProvider>
    </>
  )
}

export default App