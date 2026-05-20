import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});
