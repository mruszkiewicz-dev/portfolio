import { SimpleGrid } from '@chakra-ui/react'
import MyCard from '@/components/myCard'
import { projcetItems } from '@/data/data'

export default function Projects() {
  return (
    <SimpleGrid spacing={8} templateColumns="repeat(auto-fill, minmax(170px, 1fr))">
      {projcetItems.map((item) => (
        <MyCard key={item.name} item={item} />
      ))}
    </SimpleGrid>
  )
}
