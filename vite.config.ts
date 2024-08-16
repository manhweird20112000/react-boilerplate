import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default ({ mode }: { mode: never }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [
      TanStackRouterVite({ routesDirectory: './src/layouts', generatedRouteTree: './src/infra/generated/route.gen.ts' }),
      react(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ],
    build: {
      cssMinify: true,
      minify: true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, 'src')
      },
      dedupe: ['tsx', 'ts'],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      strictPort: true,
      host: '0.0.0.0',
      port: Number(process.env.VITE_PORT || 8000),
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    preview: {
      strictPort: true,
      host: '0.0.0.0',
      port: Number(process.env.VITE_PORT || 8000)
    }
  })
}
