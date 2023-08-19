import { fileURLToPath, URL } from 'node:url';

import { defineConfig, type UserConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vitePluginHtmlEnv from 'vite-plugin-html-env';
import mkcert from 'vite-plugin-mkcert'; // https 插件

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  const isHttps = loadEnv(mode, process.cwd()).VITE_LOCAL_SERVER_HTTPS === 'true';

  return {
    plugins: [
      vue(),
      vueJsx(),
      vitePluginHtmlEnv(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
          })
        ]
      }),
      isHttps && mkcert()
    ],

    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    server: {
      cors: true,
      host: '0.0.0.0',
      https: isHttps, // 需要开启https服务
      proxy: {
        '/api': {
          target: 'http://8.134.105.100:60615',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api')
        }
      }
    }
  };
});
