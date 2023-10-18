import { Card, CardBody, Link, Image, Divider, CardHeader, Heading, Text, CardFooter, Flex } from '@chakra-ui/react'
import { IconLink } from '@tabler/icons-react'

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
      <Flex justify="space-around">
        <Link href={`https://github.com/mruszkiewicz-dev/${item.pageUrl}`} isExternal>
          <Flex p={1}>
            <Text>Live view</Text>
            <IconLink />
          </Flex>
        </Link>
        <Link href={`https://github.com/mruszkiewicz-dev/${item.gitUrl}`} isExternal>
          <Flex p={1}>
            <Text>View code</Text>
            <Image ml={1} src="./tech/github.png" borderRadius="full" boxSize="20px" />
          </Flex>
        </Link>
      </Flex>
    </CardFooter>
  </Card>
)

export default MyCard
