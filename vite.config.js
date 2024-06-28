
import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Root directory of your project
  publicDir: 'public', // Public directory where the Docusaurus build is copied
  server: {
    port: 5174, // Preferred port for your Vite server
  },
});
;
