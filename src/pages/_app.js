// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '@/app/Components/Footer';
import theme from "../app/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp;