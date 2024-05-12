import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:  "https://Danielpviana.github.io/WebPage/",
  plugins: [react()],
})
