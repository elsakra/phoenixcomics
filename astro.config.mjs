// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://phoenixcomics.com',
  vite: {
    plugins: [tailwindcss()]
  },
  // Enable View Transitions for page animations
  viewTransitions: true,
  // Build output configuration
  build: {
    // Inline small CSS files
    inlineStylesheets: 'auto'
  },
  // Prefetch links on hover for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
