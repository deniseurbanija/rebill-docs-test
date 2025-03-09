import { type Config } from 'tailwindcss'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'
import headlessuiPlugin from '@headlessui/tailwindcss'

export default {
  content: ['./src/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['1rem', { lineHeight: '1.5rem' }],
      base: ['1.2rem', { lineHeight: '1.75rem' }],
      lg: ['1.3rem', { lineHeight: '1.75rem' }],
      xl: ['1.35rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      screens: {
        'xs': '300px',
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      colors: {
        getMethod: '#2b9df6',
        postMethod: '#3eae20',
        putMethod: '#f27400',
        deleteMethod: 'red',
        endpoint: '#001131',
        endpointHover: '#003CAC'
      },
    },
  },
  plugins: [typographyPlugin, headlessuiPlugin],
} satisfies Config
