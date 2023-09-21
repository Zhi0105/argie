import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@_src": path.resolve(__dirname, "./src"),
      "@_assets": path.resolve(__dirname, "./src/assets"),
      "@_components": path.resolve(__dirname, "./src/Components"),
      "@_navigations": path.resolve(__dirname, "./src/Navigation"),
      "@_providers": path.resolve(__dirname, "./src/Providers"),
      "@_routes": path.resolve(__dirname, "./src/Routes"),
      "@_templates": path.resolve(__dirname, "./src/Template"),
      "@_utils": path.resolve(__dirname, "./src/utils"),
    }
  },
})
