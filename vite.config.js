import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'src/chrome/',
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      input: {
        newtab: path.resolve(__dirname, 'public/newtab.html'),
        popup: path.resolve(__dirname, 'public/popup.html'),
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
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})
