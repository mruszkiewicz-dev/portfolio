import { Card, CardBody, Link, Image, Divider, CardHeader, Heading, Text, CardFooter, Flex } from '@chakra-ui/react'

const MyCard = ({ item }) => (
  <Card>
    <CardHeader>
      <Image src={item.image} borderRadius="full" boxSize="80px" alt="text" />
    </CardHeader>
    <Divider />
    <CardBody>
      <Heading size="sm">{item.name}</Heading>
      <Text>{item.description}</Text>
    </CardBody>
    <CardFooter>
      <Flex direction="column" align="center">
        <Link href="https://github.com/mruszkiewicz-dev" isExternal>
          <Text>View code</Text>
          <Image ml={12} src="./tech/github.png" borderRadius="full" boxSize="20px" />
        </Link>
      </Flex>
    </CardFooter>
  </Card>
)

export default MyCard
