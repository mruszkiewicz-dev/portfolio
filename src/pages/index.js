/* eslint-disable jsx-a11y/alt-text */
import { Highlight, Box, Flex, Image, useColorModeValue, Center, Text } from '@chakra-ui/react'
import Technology from '@/components/technology'
import Sea from '../components/landspace/sea'
/* import Bio from '../components/bio'
 */
export default function Home() {
  return (
    <Box mt={40}>
      <Box mb={20}>
        <Sea />
      </Box>
      <Flex p={2} direction={{ base: 'column', md: 'row' }} align={{ base: 'center' }}>
        <Box flex="1" justify={{ base: 'space-between', md: 'center' }} alignContent={{ base: 'center' }}>
          <Text align={{ base: 'center', md: 'left' }} fontSize="2xl">
            Cześć 👋,
          </Text>
          <Text align={{ base: 'center', md: 'left' }} fontSize="2xl">
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
          <Text align={{ base: 'center', md: 'left' }} fontSize="2xl">
            początakujący frontendowiec
          </Text>
        </Box>
        <Center w="120px" mt={4}>
          <Image
            src="./foto.jpg"
            border="solid"
            boxSize="120px"
            borderWidth="2px"
            borderColor={useColorModeValue('sunset.500', 'moonstone.500')}
            borderRadius="full"
          />
        </Center>
      </Flex>
      <Box mt={5}>
        <Technology />
      </Box>
      <Box mt={5}>{/* <Bio /> */}</Box>
    </Box>
  )
}
