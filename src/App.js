import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Config from './Pages/Config/Config';
import Forum from './Pages/Forum/Forum';
import Home from './Pages/Home/Home';


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
      <Config/>
    </ChakraProvider>
   </>
  )
}

export default App;
