import { defineConfig } from "vite"
import path from 'path'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './index.html'),
        team: path.resolve(__dirname, './team.html'),
        project: path.resolve(__dirname, './project.html'),
        contactus:path.resolve(__dirname, './contactus.html'),
        news:path.resolve(__dirname, './news.html')
      }
    }
  }
})