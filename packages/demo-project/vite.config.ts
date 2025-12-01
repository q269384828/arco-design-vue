import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';
import path from 'path';

const root = process.cwd();

// https://vite.dev/config/
export default defineConfig({

  plugins: [svgLoader(), vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      less: {
        paths: [path.resolve(root, '../web-vue')],
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@arco-design/web-vue': fileURLToPath(new URL('../web-vue/components/', import.meta.url)),
    },
  },
});
