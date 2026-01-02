import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  site: 'https://estudiojuridicocabrera.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [vue(), tailwind(), mdx(), sitemap({ entryLimit: 9999 })],
  trailingSlash: 'always', // 👈 Esta línea fuerza la barra final en todas las rutas
  base: process.env.BASE || '/',
  devOptions: {
    port: 4325,
  },
});
