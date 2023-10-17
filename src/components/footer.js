import { Highlight, Link, Image, Text, Box, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Logo from './logo'
import NextLink from 'next/link'
import { menuItems } from './../data/data'

const Footer = () => {
  return (
    <Container color="gray" maxW="container.md" as="footer" py={{ base: '12', md: '16' }} w="100%">
      <Flex pr="1" mt="2" justify={{ base: 'center', md: 'space-between' }} direction={{ base: 'column', md: 'row' }} align={{ base: 'center' }}>
        <Logo size="sm" />
        <Flex pt="2" direction={{ base: 'column', md: 'row' }} align={{ base: 'center' }}>
          <Box>
            <Text fontSize="sm">+48 505 003 487</Text>
          </Box>
          <Box m="2">
            <Text fontSize="sm">mruszkiewicz.dev@gmail.com</Text>
          </Box>
          <Box m={{ base: 6, md: 2 }}>
            <Link href="https://github.com/mruszkiewicz-dev" isExternal>
              <Image src="./tech/github.png" borderRadius="full" boxSize="20px" />
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Box
        display={{ base: 'none', md: 'flex' }}
        mt="2"
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 4,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 4,
        }}
      ></Box>
      <Flex pr="1" justify={{ base: 'center', md: 'space-between' }} direction={{ base: 'column', md: 'row' }} align={{ base: 'center' }}>
        <Flex pt="2">
          <Flex ml="3">
            {menuItems.map((menuItem) => (
              <Box key={menuItem.name} ml="2">
                <Link href={menuItem.href} as={NextLink}>
                  <Text fontSize="sm">{menuItem.name}</Text>
                </Link>
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex pt="2">
          <Box m="2">
            <Highlight
              styles={{
                px: '1',
                py: '1',
                rounded: 'full',
                bgGradient: useColorModeValue('linear(to-l,red.500, yellow.500)', 'linear(to-l, #03b5aa, #dbfe87)'),
              }}
              query={['Michał', 'Love', 'Coffee']}
            >
              Designed and built by Michał
            </Highlight>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}
export default Footer
