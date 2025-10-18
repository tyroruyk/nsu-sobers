import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/nsu-sobers/',
  plugins: [tailwindcss()],
})
