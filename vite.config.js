
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-react-swc'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import viteImagemin from 'vite-plugin-imagemin';
import dotenv from 'dotenv';

dotenv.config();

const { VITE_APP_PORT, VITE_APP_BASE_URL } = process.env;
console.log(VITE_APP_PORT, VITE_APP_BASE_URL)
export default defineConfig({
  server: {
    open: true,
    port: parseInt(VITE_APP_PORT),
    host: true,
    proxy: {
      
      '/arduino/save':{
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      }
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`
      }
    }
  },
  plugins: [
    react(),
    nodeResolve(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    commonjsOptions: {
      ignore: ['node_modules'],
    },
    chunkSizeWarningLimit: 1500,
  },
  optimizeDeps: {
    include: ['react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/hljs'],
  },
});

/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-react-swc'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import viteImagemin from 'vite-plugin-imagemin';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const { VITE_APP_PORT, VITE_APP_BASE_URL } = process.env;
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  server: {
    open: true,
    port: parseInt(VITE_APP_PORT),
    host: true,
    https: isProduction && {
      key: fs.readFileSync(path.resolve(__dirname, 'path/to/your/private-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'path/to/your/certificate.pem')),
    },
    proxy: {
      '/arduino/': {
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      },
      '/arduino/getDataArduino': {
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      },
      '/getDataArduino2': {
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      },
      '/arduino/getDataRaspberry': {
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      },
      '/arduino/getespData': {
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      },
      '/arduino/getDataSearch': {
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`,
      },
    },
  },
  plugins: [
    react(),
    nodeResolve(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    commonjsOptions: {
      ignore: ['node_modules'],
    },
    chunkSizeWarningLimit: 1500,
  },
  optimizeDeps: {
    include: ['react-syntax-highlighter', 'react-syntax-highlighter/dist/esm/styles/hljs'],
  },
});
*/
