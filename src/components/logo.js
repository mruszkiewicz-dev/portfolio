import { Link, Heading, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const Logo = ({ size }) => (
  <Link
    href="/"
    as={NextLink}
    style={{
      textDecoration: 'none',
    }}
  >
    <Heading
      bgGradient={useColorModeValue('linear(to-l,red.500, yellow.500)', 'linear(to-l, #03b5aa, #dbfe87)')}
      bgClip="text"
      p={{ base: 'none', md: '2' }}
      as="h1"
      size={size}
      letterSpacing="0.15em"
      dangerouslySetInnerHTML={{ __html: '{mruszkiewicz.dev}' }}
    />
  </Link>
)

export default Logo
