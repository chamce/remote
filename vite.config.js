import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: ['styled-jsx/babel'],
      },
    }),
  ],
  build: {
    outDir: 'docs',
    lib: {
      formats: ['cjs'],
      entry: resolve(__dirname, 'src/remoteEntry.jsx'),
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@paciolan/remote-component',
        'bootstrap',
        'styled-jsx',
      ],
      output: { exports: 'named' },
    },
  },
  define:
    mode === 'production'
      ? { 'process.env.NODE_ENV': '"production"' }
      : {},
}));
