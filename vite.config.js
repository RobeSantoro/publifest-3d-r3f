import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  root: "src/",
  publicDir: ['../public/'],
  plugins: [react()],
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.wasm"],
})
