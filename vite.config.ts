import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React-Review/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Certifique-se de que isso está configurado corretamente
  }
})
