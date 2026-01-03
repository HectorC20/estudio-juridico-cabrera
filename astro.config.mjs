import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import dotenv from 'dotenv';

dotenv.config();

const isVercel = process.env.VERCEL ? true : false;
const isPathMain = process.env.PATH_MAIN === 'true';

console.log('Build Configuration:');
console.log('  VERCEL:', process.env.VERCEL);
console.log('  isVercel:', isVercel);
console.log('  PATH_MAIN:', process.env.PATH_MAIN);
console.log('  Adapter:', isVercel ? 'Vercel' : 'Node');

// Prioridad: Si es Vercel, usamos Vercel adapter.
// Si NO es Vercel y PATH_MAIN es true (cPanel), usamos Node adapter.
// Por defecto (local dev sin variables), usamos Node adapter.
const adapter = isVercel ? vercel() : node({ mode: 'standalone' });


export default defineConfig({
  site: 'https://estudiojuridicocabrera.com',
  output: 'server',
  adapter,
  vite: {
    server: {
      
    },
  },
  integrations: [vue(), tailwind(), mdx(), sitemap({ entryLimit: 9999 })],
  trailingSlash: 'ignore',
  base: process.env.BASE || '/',
  devOptions: {
    port: 4325,
  },
});

