import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: '/Focus-Brain/',
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  preview: {
    port: 4173,
    host: true,
  },
});
