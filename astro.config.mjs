import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jinhopark8345.github.io',
  integrations: [tailwind()],
});
