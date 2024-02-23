import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://localhost:5000/',
      secure: false,
    },
  },
  plugins: [react()],
  
})
