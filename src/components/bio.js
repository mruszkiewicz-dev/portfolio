import { Text, TableContainer, Table, Tr, Td, Tbody } from '@chakra-ui/react'
import { bioItems } from './../data/data'

const Bio = () => (
  <TableContainer>
    <Table>
      <Text fontSize="lg">Bio</Text>
      <Tbody>
        {bioItems.map((item) => (
          <Tr key={item.year}>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
        ))}

        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
)

export default Bio
