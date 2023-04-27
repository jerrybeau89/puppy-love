
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }


function App() {
    return (
      <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
        </ChakraProvider>
    );
}
export default App;