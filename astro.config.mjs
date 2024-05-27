import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), react()],
  site: 'https://endemico.vercel.app',
  output: 'server',
  adapter: vercel()
})
