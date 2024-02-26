import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://green-guard-server.vercel.app/',
      secure: false,
    },
  },
  plugins: [react()],
  build: {
    outDir: './build',
    emptyOutDir: false,// Specify the output directory
  }
  
})
