import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Rotas from './Rotas/Rotas';
import Comentario from './Pages/Comentario/Comentario';


function App() {
  const styles = {
    global: () => ({
      body: {
        fontFamily: 'Poppins',
        margin: 0,
        padding: 0,
        background: 'var(--base-light-gray, #F6F8FD)',
      }})}

      const theme = extendTheme({styles})
  return (
    <>
    <ChakraProvider theme={theme}>
      <Comentario/>
    </ChakraProvider>
   </>
  )
}

export default App;
