import Main from '../components/layouts/main'
import { Chakra } from '../chakra'

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
    </Chakra>
  )
}

export default MyApp
