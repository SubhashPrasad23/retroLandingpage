import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import textShadow from '@designbycode/tailwindcss-text-shadow'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
