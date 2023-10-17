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
  GridItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react'
import NextLink from 'next/link'
import Logo from '../components/logo'
import { menuItems } from '../data/data'

const MyMenuList = ({ type, path }) => {
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
    <Box
      position="fixed"
      bgColor={useColorModeValue('sunset.800', 'yinmn_blue.200')}
      as="nav"
      w="100%"
      overflow="hidden"
      zIndex="99999"
      backdropFilter="auto"
      backdropBlur="6px"
    >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="center">
        <Grid p={2} templateColumns="repeat(5, 0.5fr)" gap={1}>
          <GridItem pt={1}>
            <Logo size="md" />
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
