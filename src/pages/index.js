import { Highlight, Box, Image, useColorModeValue, Flex, Center } from '@chakra-ui/react'
import Technology from '@/components/technology'
export default function Home() {
  return (
    <Box mt={20} align="center">
      <Flex m={2}>
        <Box flex="1">
          <Highlight
            query="Cześć, jestem Michał"
            styles={{
              px: '2',
              py: '1',
              rounded: 'full',
              fontSize: '20px',
              bgGradient: useColorModeValue('linear(to-l,red.500, yellow.500)', 'linear(to-l, #03b5aa, #dbfe87)'),
            }}
          >
            Cześć, jestem Michał, początkujący frontendowiec, pasjonat kodowania. Kiedy nie jestem zakopany w kodzie, po prostu odprężam się na
            perkusji - rytm to moje drugie imię. A gdy tylko mogę, uciekam od monitora, by cieszyć się przyrodą.
          </Highlight>
        </Box>
        <Center w="120px" ml={5}>
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
      <Technology />
    </Box>
  )
}
