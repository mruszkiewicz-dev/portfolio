import { Flex, Container, Box, Menu, MenuList, MenuItem, MenuButton, Link } from '@chakra-ui/react'
import { IconMenu2 } from '@tabler/icons-react'

const MyMenuList = ({ type }) => {
  const menuItems = [
    {
      name: 'O mnie',
      href: 'omnie',
    },
    {
      name: 'Projekty',
      href: 'projekty',
    },
    {
      name: 'Kontakt',
      href: 'kontakt',
    },
  ]

  const typeTag = {
    mobile: MenuItem,
    deskop: Link,
    default: 'a',
  }
  const Tag = typeTag[type] || typeTag.default
  return menuItems.map((item) => (
    <Tag key={item.href} href={item.href}>
      {item.name}
    </Tag>
  ))
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

const DisplayMenu = () => (
  <Box m={3}>
    <MyMenuList type="deskop" />
  </Box>
)

const Navbar = () => (
  <Box position="fixed" as="nav" w="100%">
    <Container display="flex" p={2} wprap="wrap" alignContent="center" justifyContent={'space-between'}>
      <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
        <BurgerMenu />
      </Box>
      <Flex flexGrow={2} alignItems="center">
        <p>mruszkiewicz.dev</p>
      </Flex>
      <Box display={{ base: 'none', md: 'flex' }} flexGrow={2} alignItems="center">
        <DisplayMenu />
      </Box>
    </Container>
  </Box>
)

export default Navbar
