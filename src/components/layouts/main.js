import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michał Ruszkiewicz homeoage" />
        <meta name="author" content="Michał Ruszkiewicz" />
        <meta name="author" content="mruszkiewicz.dev" />
        <title>Michał Ruszkiewicz - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container pt={40}>{children}</Container>
      <Footer />
    </Box>
  )
}

export default Main
