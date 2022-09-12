import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h'
  },
  build: {
    rollupOptions: {
      input: {
        explorerHtml: resolve('explorer.html'),
        providersHtml: resolve('providers.html'),
        explorer: resolve('src/countryExplorer.jsx'), // this is kinda hacky
        providers: resolve('src/importantProviders.jsx'),
        style: resolve('src/style.css')
      },
      output: {
        // disable hashs in output filenames
        // required for contractor
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: '[name].js',
        manualChunks(id) {
          if (id.includes('embed.js')) return 'bs'
          if (id.includes('bootstrap')) return 'bs'
          if (id.includes('node_modules')) return 'vendor'
        }
      }
    }
  },
  resolve: {
    alias: {
      '~': './node_modules/'
    }
  }
})
