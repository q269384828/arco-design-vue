import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath } from 'url';


// https://vite.dev/config/
export default defineConfig({

  plugins: [vue({
    template: {
      compilerOptions: {
        hoistStatic: false
      }
    }
  }), vueJsx()],
  css: {
    preprocessorOptions: {
      less: {
        paths: [fileURLToPath(new URL('../web-vue', import.meta.url))],
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
