import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'assets/main.css';
          return 'assets/[name].[ext]';
        }
      }
    }
  },
  server: {
    port: 3001,
    strictPort: false,
    host: true
  },
})