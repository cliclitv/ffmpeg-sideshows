import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  plugins: [vue()],
  publicDir:'',
  base: "https://cliclitv.github.io/ffmpeg-sideshows/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  build: {
    outDir: './docs',
    assetsDir: '',
  },
  server: {
    // host: '0.0.0.0', //只能使用localhost
    //处理ffmpeg的SharedArrayBuffer is not defined
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
})
