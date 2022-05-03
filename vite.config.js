import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'src/chrome/',
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        newtab: path.resolve(__dirname, 'public/newtab.html'),
        test: path.resolve(__dirname, 'public/test.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()]
})
