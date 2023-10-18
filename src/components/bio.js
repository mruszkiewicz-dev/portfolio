import { Text, TableContainer, Table, Tr, Td, Tbody } from '@chakra-ui/react'
import { bioItems } from './../data/data'

const Bio = () => (
  <>
    <Text fontSize="lg">Bio</Text>
    <TableContainer>
      <Table>
        <Tbody>
          {bioItems.map((item) => (
            <Tr key={item.year}>
              <Td>{item.year}</Td>
              <Td>{item.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </>
)

export default Bio
