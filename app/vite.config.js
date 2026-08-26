import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    drop: ['console', 'debugger'],
  },
});
