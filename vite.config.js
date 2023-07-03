import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest : {
        icons : [
          {
            src : "/favicon.ico",
            sizes : "512x512",
            type : "image/ico",
            purpose : "any maskable"
          }
        ],
        "theme_color": "#171717",
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
