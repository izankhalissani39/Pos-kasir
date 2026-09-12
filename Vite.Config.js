import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // atau @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: '/Pos-kasir/', // Sesuaikan dengan nama repositori Anda di GitHub
})
