/* eslint-disable jsx-a11y/alt-text */
import { Highlight, Box, Image, useColorModeValue, Center, Text } from '@chakra-ui/react'
import Technology from '@/components/technology'
import Sea from '../components/landspace/sea'

export default function Home() {
  return (
    <Box mt={40}>
      <Box mb={20}>
        <Sea />
      </Box>
      <Box p={2} display={{ base: 'div', md: 'flex' }}>
        <Box flex="1">
          <Text fontSize="2xl">Cześć 👋,</Text>
          <Text fontSize="2xl">
            <Highlight
              query="jestem Michał"
              styles={{
                px: '2',
                py: '1',
                rounded: 'full',
                bgGradient: useColorModeValue('linear(to-l,red.500, yellow.500)', 'linear(to-l, #03b5aa, #dbfe87)'),
              }}
            >
              jestem Michał
            </Highlight>
          </Text>
          <Text fontSize="2xl">początakujący frontendowiec</Text>
        </Box>
        <Center w="120px" ml={2}>
          <Image
            src="./foto.jpg"
            border="solid"
            boxSize="120px"
            borderWidth="2px"
            borderColor={useColorModeValue('sunset.500', 'moonstone.500')}
            borderRadius="full"
          />
        </Center>
      </Box>
      <Box mt={5}>
        <Technology />
      </Box>
    </Box>
  )
}
