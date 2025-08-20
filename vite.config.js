import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // base: '/react-site/',
    base: mode === 'production' ? '/react-site/' : '/react-site/',
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '')  // 필요한 경우 주석 해제
        }
      }
    }
  }
})
