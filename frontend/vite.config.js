import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import magicalSvg from 'vite-plugin-magical-svg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    magicalSvg({
      target: 'react' // ตั้งค่าให้แปลงเป็น React Component
    })
  ],
  test: {
    globals: true,                          
    environment: 'jsdom',                   
    setupFiles: './src/setupTests.js',     
  },
})
