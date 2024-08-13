
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  publicDir: 'public',
  server: {
    port: 5174,
    proxy: {
      '/testflare': {
        target: 'https://paltek.assistflare.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/testflare/, ''),
      },
    },
  },
});
