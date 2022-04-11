import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h'
  },
  build: {
    rollupOptions: {
      output: {
        // disable hashs in output filenames
        // required for contractor
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: '[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '~': './node_modules/'
    }
  }
})
