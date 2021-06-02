import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Public Sans', system - ui, -apple - system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans - serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'mono': ['Office Code Pro', Menlo, Monaco, Consolas, 'Liberation Mono',
        'Courier New', monospace]
    },
    fontSize: {
      'sm': '.8rem',
      'base': '1rem',
      'lg': '1.25rem',
      'xl': '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '4.052rem',
    },
      colors: {
      black: '#1a1a1a',
      white: '#eff5f4',
      teal: {
        DEFAULT: '#43dbb2',
        dark: '#1f2e2a',
      },
      red: '#ff476f',
    }
  }
})