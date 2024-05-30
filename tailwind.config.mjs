/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: '#282827',
        secondary: '#F5F5F5'
      },
      screens: {
        xs: '361px'
      },
      transitionProperty: {
        'height-opacity-visibility': 'height, opacity, visibility'
      },
      transitionDuration: {
        500: '500ms'
      },
      transitionTimingFunction: {
        ease: 'ease'
      }
    }
  },
  plugins: []
}
