export const colors = {
  white: '#fff',
  gray: {
    50: '#FDFDFD',
    200: '#DEDEDE',
    250: '#D9D9D9',
    500: '#C5C7C5',
    600: '#ACACAC',
    700: '#666666',
    750: '#5D5F5D',
  },
  black: {
    200: '#323232',
    500: '#212121',
  },
  blue: {
    25: '#F1F3F5',
    300: '#95C6FF',
    400: '#046AD0',
    500: '#1165BA',
    600: '#175CB7',
    700: '#338AFF',
    800: '#003986',
    950: '#001633',
  },
  red: {
    25: '#F5F1F3',
    300: '#db2e34',
    500: '#E94242',
    600: '#C1292E',
    800: '#8f1e22',
  },
  gradient: {
    primary:
      'linear-gradient(303.77deg, rgba(17, 101, 186, 0.79) 34.68%, rgba(90, 156, 255, 0.79) 79.96%), linear-gradient(303.77deg, rgba(217, 217, 217, 0) -1.3%, rgba(17, 101, 186, 0.79) 54.57%), linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(17, 101, 186, 0.79) 68.75%)',
  },
} as const

export const fontSizes = {
  xxxl: '3rem',
  xxl: '2.5rem',
  xl: '2rem',
  lg: '1.5rem',
  md: '1.125rem',
  sm: '1rem',
  xs: '0.875rem',
} as const

export const theme = {
  colors,
  fontSizes,
}
