import { Text, Box } from '@chakra-ui/react'
import Technology from '@/components/technology'
export default function Home() {
  return (
    <Box mt={20} align="center">
      <Text fontSize="2xl">Cześć, jestem ludzikiem który uczy się kodować.</Text>
      <Technology />
    </Box>
  )
}
