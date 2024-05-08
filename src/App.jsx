import * as React from 'react'
import './App.css'
import { Input } from '@chakra-ui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input variant='outline' placeholder='Outline' />
    </>
  )
}

export default App