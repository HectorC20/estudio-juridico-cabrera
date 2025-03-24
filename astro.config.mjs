import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  site: 'https://estudio-juridico-cabrera.vercel.app',
  output: 'server',
  adapter: vercel(undefined),
  integrations: [vue(), tailwind(), mdx(), sitemap()],
});
