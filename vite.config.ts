import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    global: 'globalThis', // <- important pour setTimeout, Buffer, etc.
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      process: 'process/browser',
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'process'],
  },
});
