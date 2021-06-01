import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  darkMode: 'class',
  theme: {
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