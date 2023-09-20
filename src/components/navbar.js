import { Grid, Container, Center, Box, Menu, MenuList, MenuItem, MenuButton, Link, Heading, GridItem } from '@chakra-ui/react'
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
    <Tag p={2} key={item.href} href={item.href}>
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

const Navbar = () => (
  <Box position="fixed" as="nav" w="100%">
    <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="center">
      <Grid p={2} templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem p={2} mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'initial'}>
            mruszkiewicz.dev
          </Heading>
        </GridItem>
        <GridItem colSpan={3} p={0}>
          <Box display={{ base: 'none', md: 'flex' }} h="100%">
            <Center w="400px">
              <MyMenuList type="deskop" />
            </Center>
          </Box>
        </GridItem>
        <GridItem>
          <Box m={1} display={{ base: 'inline-block', md: 'none' }}>
            <BurgerMenu />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  </Box>
)

export default Navbar
