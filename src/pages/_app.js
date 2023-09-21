import { ChakraProvider } from '@chakra-ui/react'
import Main from '../components/layouts/main'
import theme from '../themes/theme'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
