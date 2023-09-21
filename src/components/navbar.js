import { Grid, Container, Center, Box, Menu, MenuList, MenuItem, MenuButton, Link, Heading, GridItem } from '@chakra-ui/react'
import { IconMenu2 } from '@tabler/icons-react'
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
      <Tag p={2} key={item.href} href={item.href} as={NextLink} bg={active ? 'red' : undefined} color={active ? '#202023' : 'red'}>
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

const Navbar = ({ path }) => (
  <Box position="fixed" as="nav" w="100%">
    <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="center">
      <Grid p={2} templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem p={2} mr={5}>
          <Link
            href="/"
            as={NextLink}
            style={{
              textDecoration: 'none',
            }}
          >
            <Heading as="h1" size="lg" letterSpacing="0.15em" dangerouslySetInnerHTML={{ __html: '{mruszkiewicz.dev}' }} />
          </Link>
        </GridItem>
        <GridItem colSpan={3} p={0}>
          <Box display={{ base: 'none', md: 'flex' }} h="100%">
            <Center w="400px">
              <MyMenuList type="deskop" path={path} />
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
