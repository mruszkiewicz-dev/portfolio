import { Text, TableContainer, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react'

const Bio = () => (
  <TableContainer>
    <Table>
      <Text fontSize="lg">Bio</Text>
      <Thead>
        <Tr>
          <Th>Rok</Th>
          <Th>into</Th>
        </Tr>
      </Thead>
      <Tbody>
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
