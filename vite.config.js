import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 80,
    host: '127.0.0.1',
    open: true,
    proxy: {
      '/dev-api': {
        // 后端地址
        target: 'http://localhost:8080/',
        changeOrigin: true,
        // 将/dev-api路径去掉
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      }
    }
  }
})
