import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
  //   sourcemap: process.env.NODE_ENV === 'development'
  // },
  plugins: [
    uni(),
    UnoCSS({ mode: 'vue-scoped' }),
    eslintPlugin({
      include: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.vue',
        'src/**/*.js',
        'src/**/*.jsx',
        'src/*.ts',
        'src/*.js',
        'src/*.vue'
      ]
    }),
    autoImport({
      imports: ['vue', 'pinia'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true
      },
      dts: 'src/typing/auto-imports.d.ts'
    })
  ],
  // 解析模块路径
  resolve: {
    // 别名
    alias: {
      // @ 表示 src 目录
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 服务器配置
  server: {
    // 主机地址
    host: '0.0.0.0',
    // 开启hmr
    hmr: true,
    // 端口号
    port: 3006,
    // 自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        // 目标地址
        target: 'http://localhost:3000/api',
        // 是否改变源
        changeOrigin: true,
        // 重写路径
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局 scss 变量
        additionalData: `@import "@/uni.scss";`
      }
    }
  }
})
