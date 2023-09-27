import { Highlight, Box, Image, useColorModeValue, Center } from '@chakra-ui/react'
import Technology from '@/components/technology'
import Sea from '../components/landspace/sea'

export default function Home() {
  return (
    <Box mt={10} align="center">
      <Box m={10}>
        <Sea />
      </Box>

      <Box p={2} display={{ base: 'div', md: 'flex' }}>
        <Box flex="1">
          <Highlight
            query="Cześć, jestem Michał"
            styles={{
              px: '2',
              py: '1',
              rounded: 'full',
              fontSize: '16px',
              bgGradient: useColorModeValue('linear(to-l,red.500, yellow.500)', 'linear(to-l, #03b5aa, #dbfe87)'),
            }}
          >
            Cześć, jestem Michał, początkujący frontendowiec, pasjonat kodowania. Kiedy nie jestem zakopany w kodzie, po prostu odprężam się na
            perkusji - rytm to moje drugie imię.
          </Highlight>
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
