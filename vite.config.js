import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: 'https://GouravChanalia.github.io/resume/building-without-routing/',
  build: {
    outDir: 'build'
  }
})
