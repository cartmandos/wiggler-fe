import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@styles', replacement: '/src/styles' },
      { find: '@store', replacement: '/src/store' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@lib', replacement: '/src/lib' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@assets', replacement: '/src/assets' },
    ],
  },
});
