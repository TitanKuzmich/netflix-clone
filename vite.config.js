import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  resolve:{
    alias:{
      'components' : path.resolve(__dirname, './src/app/components'),
      'pages' : path.resolve(__dirname, './src/app/pages'),
      'state' : path.resolve(__dirname, './src/state'),
      'assets' : path.resolve(__dirname, './src/assets'),
      'styles' : path.resolve(__dirname, './src/styles')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        rootpath: 'http://localhost:3000/src/assets/',
      }
    }
  }
})
