import { extendTheme } from '@chakra-ui/react'
import '@fontsource/varela-round'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    black: '#070a0c',

    gunmetal: {
      DEFAULT: '',
      100: '#070a0c',
      200: '#0d1417',
      300: '#141e23',
      400: '#1b282f',
      500: '#22333b',
      600: '#40606f',
      700: '#608ea3',
      800: '#95b4c2',
      900: '#cad9e0',
    },
    almond: {
      DEFAULT: '#eae0d5',
      100: '#3c2d1e',
      200: '#775b3c',
      300: '#ae885f',
      400: '#ccb49b',
      500: '#eae0d5',
      600: '#efe7de',
      700: '#f3ede7',
      800: '#f7f3ef',
      900: '#fbf9f7',
    },
    khaki: {
      DEFAULT: '#c6ac8f',
      100: '#2d2317',
      200: '#5b462e',
      300: '#886945',
      400: '#b08b62',
      500: '#c6ac8f',
      600: '#d2bda5',
      700: '#ddcebc',
      800: '#e8ded2',
      900: '#f4efe9',
    },
    walnut_brown: {
      DEFAULT: '#5e503f',
      100: '#13100d',
      200: '#262019',
      300: '#393026',
      400: '#4c4133',
      500: '#5e503f',
      600: '#89755b',
      700: '#ab9880',
      800: '#c7baab',
      900: '#e3ddd5',
    },
  },

  fonts: {
    body: `'Varela Round', 'sans-serif'`,
    heading: `'Varela Round', 'sans-serif'`,
  },
})

export default theme
