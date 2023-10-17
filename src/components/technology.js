import { Image, Flex, keyframes, Text } from '@chakra-ui/react'

const animationRoute = keyframes`
0% {
   -webkit-transform: scale(1) rotateZ(0);
           transform: scale(1) rotateZ(0);
 }
 50% {
   -webkit-transform: scale(1.5) rotateZ(180deg);
           transform: scale(1.5) rotateZ(180deg);
 }
 100% {
   -webkit-transform: scale(1) rotateZ(360deg);
           transform: scale(1) rotateZ(360deg);
 }
}
`

const Technology = () => {
  const animation = `${animationRoute} 0.65s linear both`

  const data = [
    { name: 'html' },
    { name: 'css3' },
    { name: 'js' },
    { name: 'react' },
    { name: 'redux' },
    { name: 'reactrouter' },
    { name: 'node' },
    { name: 'nextjs' },
    { name: 'axios' },
    { name: 'materialui' },
    { name: 'prettier' },
    { name: 'eslint' },
    { name: 'npm' },
    { name: 'git' },
    { name: 'github' },
    { name: 'vscode' },
    { name: 'ubuntu' },
    { name: 'figma' },
  ]

  return (
    <Flex direction="column" align="center" mt={10}>
      <Text as="b" fontSize="xl">
        Tech Stack
      </Text>
      <Text as="em" fontSize="sm">
        Technologie które używałem
      </Text>
      <Flex wrap="wrap" justify="center" m={10}>
        {data.map((item) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image p={2} key={item.name} src={`./tech/${item.name}.png`} borderRadius="full" boxSize="50px" _hover={{ animation: animation }} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Technology
