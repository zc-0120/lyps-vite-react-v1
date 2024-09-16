import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/LYSA-APP",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.ly.kh.edu.tw/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})