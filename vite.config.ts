import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // drop: ['console', 'debugger'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion'],
          // 'icons': ['lucide-react'] // Let tree-shaking handle this
        }
      }
    },
    chunkSizeWarningLimit: 1000,

  },
  server: {
    port: 5173
  }
})
