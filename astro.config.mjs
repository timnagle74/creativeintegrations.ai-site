import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://creativeintegrations.ai',
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
