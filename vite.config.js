import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ebb7-103-157-79-162.ngrok-free.app',
      '.ngrok-free.app' 
    ],
    host: true 
  }
})