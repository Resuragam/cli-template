import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import eslint from 'vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@\/components/, replacement: resolve(__dirname, 'components') },
      { find: /^@\/common/, replacement: resolve(__dirname, 'common') },
    ],
    extensions: ['.ts', '.js', '.json'],
  },
  plugins: [
    vue(),
    vueJsx(),
    eslint({
      include: ['*.ts', '*.js', '*.vue'],
      exclude: ['node_modules'],
      cache: false,
    }),
  ],
});
