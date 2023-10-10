import {
  Grid,
  Button,
  Container,
  Center,
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Link,
  Heading,
  GridItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react'
import NextLink from 'next/link'

const MyMenuList = ({ type, path }) => {
  const menuItems = [
    {
      name: 'O mnie',
      href: '/',
    },
    {
      name: 'Projekty',
      href: '/projects',
    },
    {
      name: 'Kontakt',
      href: '/contact',
    },
  ]

  const typeTag = {
    mobile: MenuItem,
    deskop: Link,
    default: 'a',
  }
  const Tag = typeTag[type] || typeTag.default
  return menuItems.map((item) => {
    const active = path === item.href
    return (
      <Tag
        p={2}
        key={item.href}
        href={item.href}
        as={NextLink}
        rounded="md"
        bg={active && useColorModeValue('sunset.500', 'moonstone.500')}
        color={active ? useColorModeValue('sunset.100', 'moonstone.900') : useColorModeValue('sunset.100', 'moonstone.900')}
      >
        {item.name}
      </Tag>
    )
  })
}

const BurgerMenu = () => (
  <Menu id="navbar-menu">
    <MenuButton>
      <IconMenu2 />
    </MenuButton>
    <MenuList>
      <MyMenuList type="mobile" />
    </MenuList>
  </Menu>
)

const Navbar = ({ path }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box position="fixed" as="nav" w="100%" overflow="hidden" zIndex="99999" backdropFilter="auto" backdropBlur="6px">
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="center">
        <Grid p={2} templateColumns="repeat(5, 0.5fr)" gap={1}>
          <GridItem pt={1}>
            <Link
              href="/"
              as={NextLink}
              style={{
                textDecoration: 'none',
              }}
            >
              <Heading
                bgGradient={useColorModeValue('linear(to-l,red.500, yellow.500)', 'linear(to-l, #03b5aa, #dbfe87)')}
                bgClip="text"
                p={{ base: 'none', md: '2' }}
                as="h1"
                size="md"
                letterSpacing="0.15em"
                dangerouslySetInnerHTML={{ __html: '{mruszkiewicz.dev}' }}
              />
            </Link>
          </GridItem>
          <GridItem colSpan={{ base: '0', md: '3' }} p={1}>
            <Box display={{ base: 'none', md: 'flex' }}>
              <Center w="400px">
                <MyMenuList type="deskop" path={path} />
              </Center>
            </Box>
          </GridItem>
          <GridItem>
            <Button
              _hover={{ color: useColorModeValue('sunset.900', 'moonstone.100') }}
              color={useColorModeValue('sunset.100', 'moonstone.900')}
              bg={useColorModeValue('sunset.500', 'moonstone.500')}
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? <IconMoon /> : <IconSun />}
            </Button>
          </GridItem>
          <GridItem>
            <Box
              rounded="md"
              p={2}
              display={{ base: 'flex', md: 'none' }}
              _hover={{ color: useColorModeValue('sunset.900', 'moonstone.100') }}
              color={useColorModeValue('sunset.100', 'moonstone.900')}
              bg={useColorModeValue('sunset.500', 'moonstone.500')}
            >
              <BurgerMenu />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Navbar
