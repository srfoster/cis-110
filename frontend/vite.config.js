import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/cis-110/' : '/',
  define: {
    // Optional: Set build timestamp for cache busting
    'import.meta.env.VITE_BUILD_TIMESTAMP': JSON.stringify(Date.now().toString())
  },
  resolve: {
    alias: {
      // Ensure single React instance across all dependencies
      'react': resolve('./node_modules/react'),
      'react-dom': resolve('./node_modules/react-dom'),
      'react-router-dom': resolve('./node_modules/react-router-dom')
    },
    dedupe: ['react', 'react-dom', 'react-router-dom']
  }
}))
