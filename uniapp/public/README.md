# 1. 创建项目：

```cmd
npx degit dcloudio/uni-preset-vue#vite-ts uniapp
# 第一次
$ y
pnpm i
```

# 2. .editorconfig：

```bash
# .editorconfig 文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off # 关闭最大行长度限制
trim_trailing_whitespace = false # 关闭末尾空格修剪
```

# 3. .prettierrc.json：

~~~bash
pnpm i prettier -D
~~~

~~~json
{
  "singleQuote": true,
  "semi": false,
  "printWidth": 100,
  "trailingComma": "none",
  "endOfLine": "auto",
  "vueIndentScriptAndStyle": true,
  "tabWidth": 2,
  "useTabs": false,
  "quoteProps": "as-needed"
}
printWidth: 100, // 超过最大值换行 
  tabWidth: 2, // 缩进字节数 
  useTabs: false, // 缩进不使用tab，使用空格 
  semi: false, // 句尾添加分号 
  vueIndentScriptAndStyle: true, // 缩进Vue文件中的脚本和样式标签 
  singleQuote: true, // 不适用单引号，适用双引号 
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号 
  bracketSpacing: true, // 格式化结果为 : { foo: bar } 
  trailingComma: 'none', // 无尾逗号 
  arrowParens: 'avoid', // 为单行箭头函数的参数添加圆括号 
  htmlWhitespaceSensitivity: 'strict', // 空格被认为是敏感的 
  endOfLine: 'auto' // 设置统一的行结尾样式 保持现有的行尾 
~~~

# 4. 更新下初始依赖：

~~~json
"dependencies": {
    "@dcloudio/uni-app": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-app-plus": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-components": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-h5": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-alipay": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-baidu": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-jd": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-kuaishou": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-lark": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-qq": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-toutiao": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-weixin": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-mp-xhs": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-quickapp-webview": "3.0.0-alpha-3081220230802001",
    "vue": "^3.2.47",
    "vue-i18n": "^9.2.2"
  },
  "devDependencies": {
    "@dcloudio/uni-automator": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-cli-shared": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-stacktracey": "3.0.0-alpha-3081220230802001",
    "@dcloudio/uni-vue-devtools": "3.0.0-alpha-3080220230511001",
    "@dcloudio/vite-plugin-uni": "3.0.0-alpha-3081220230802001",
    "@vue/runtime-core": "^3.2.45",
    "@dcloudio/types": "^3.3.3",
    "@types/node": "^18.11.9",
    "@vue/tsconfig": "^0.4.0",
    "typescript": "^5.1.6",
    "vite": "^4.4.9",
    "vue-tsc": "^1.8.8"
  }
~~~



# 5.  .eslintrc.cjs：

~~~bash
pnpm i eslint -D
npx eslint --init

You can also run this command directly using 'npm init @eslint/config'.
 
? How would you like to use ESLint? ...
To check syntax and find problems
 
? What type of modules does your project use? ...
JavaScript modules (import/export)
 
? Which framework does your project use? ...
Vue.js
 
? Does your project use TypeScript? » No / Yes
Yes
 
? Where does your code run? ... (用空格选中两个，回车确定)
√ Browser
√ Node
 
? What format do you want your config file to be in? ...
JavaScript
 
The config that you've selected requires the following dependencies:
eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now?
No
~~~

~~~json
// 在package.json,添加命令
 "scripts": {
 	// 执行该命令eslint会检测当前项目下所有的.vue,.js,.ts,.jsx,.tsx文件是否符合eslint的代码规范，并尝试自动修复
    "tsc": "vue-tsc --noEmit --skipLibCheck",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix"
  }
~~~

~~~bash
pnpm i -D eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

pnpm lint
E:\Desktop\GoWhere\go-where-uniapp\uniapp\src\pages\index\index.vue
  1:1  error  Component name "index" should always be multi-word  vue/multi-word-component-names        

✖ 1 problem (1 error, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1.
~~~

~~~js
// .eslintrc.cjs
rules: {
    'vue/multi-word-component-names': ['off']
  }
~~~


~~~bash
pnpm install @rushstack/eslint-patch eslint-plugin-import@latest eslint-import-resolver-typescript -D
~~~

~~~js
// .eslintrc.cjs
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports...
~~~

# 6. 解决ESLint与Prettier的冲突：

~~~bash
# 因为ESLint和Prettier都可以进行代码格式化，而且我们在setttings.json文件中同时开启了ESLint和Prettier进行代码格式化，所以两者重叠的格式化规则不一致时就导致了格式化代码时出现冲突的问题
pnpm i eslint-config-prettier eslint-plugin-prettier -D
# eslint-config-prettier 会关闭ESLint中有关代码格式化的配置
# eslint-plugin-prettier 把Prettier配置成ESLint的一个插件，让其当做一个linter规则来运行
~~~

~~~js
// 在 .eslintrc.cjs 中 extends的最后添加一个配置
extends: [
    "plugin:prettier/recommended" // 解决ESlint和Prettier冲突
  ]
~~~

# 7. .eslintrc.cjs完整配置：

~~~js
// .eslintrc.cjs
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:import/recommended',
    'plugin:prettier/recommended' // 解决ESlint和Prettier冲突，放在最后
  ],
  // 小程序全局变量
  globals: {
    uni: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    getApp: true,
    UniApp: true,
    UniHelper: true,
    App: true,
    Page: true,
    Component: true,
    AnyObject: true
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue', // 2. 加入 prettier 的 eslint 插件
    'prettier',
    '@typescript-eslint',
    // 3. 加入 import 的 eslint 插件 eslint-import-resolver-typescript
    'import'
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        trailingComma: 'none',
        endOfLine: 'auto',
        vueIndentScriptAndStyle: true,
        tabWidth: 2,
        useTabs: false,
        quoteProps: 'as-needed'
      }
    ],
    // 强制使用组件名称的全称，而不是简写
    'vue/multi-word-component-names': ['off'],
    // 禁止使用setup函数中的props destructure
    'vue/no-setup-props-destructure': ['off'],
    // 禁止使用已被弃用的HTML元素
    'vue/no-deprecated-html-element-is': ['off'],
    // 禁用未使用的变量
    '@typescript-eslint/no-unused-vars': ['off'],
    // 禁用未解决模块导入规则
    'import/no-unresolved': ['off'],
    // 对后缀的检测，否则 import 一个ts文件也会报错，需要手动添加'.ts', 增加了下面的配置后就不用了
    'import/extensions': ['off']
    // 禁止使用特定的类型
    // '@typescript-eslint/ban-types': [
    //   'error',
    //   {
    //     // 是否扩展默认规则
    //     extendDefaults: true,
    //     // 禁用的类型
    //     types: {
    //       '{}': false
    //     }
    //   }
    // ]
    // 禁止使用console
    // 'no-console': ['off']
  },
  settings: {
    // 配置 ESLint 解析器，支持 TypeScript 和 JSON 文件
    'import/parsers': {
      // 指定TypeScript解析器，支持.ts和.tsx文件
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
    },
    // 配置 ESLint 模块解析器，支持 TypeScript 和 JSON 文件
    'import/resolver': {
      typescript: {}
    }
  }
}
~~~

# 8. 配置vite运行的时候自动检测eslint规范：

~~~bash
# vite运行的时候默认是不会自动检测eslint规范的，如下图，我们在main.ts文件中声明了变量a，但是没有使用，但是vite可以正常运行却没有给出eslint警告，而执行pnpm lint命令时却可以看到有eslint的警告信息
pnpm i vite-plugin-eslint -D
~~~

~~~ts
// 配置 vite.config.ts文件
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
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
    })
  ]
})
~~~

# 10. 修改 vite.config.ts 文件则不需要重新运行也生效配置：

~~~bash
pnpm i vite-plugin-restart -D
~~~

~~~ts
import viteRestart from 'vite-plugin-restart'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteRestart({
      restart: ['vite.config.ts']
    })
  ]
})
~~~

# 11. 解析模块路径 @ ：

~~~ts
// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  // 解析模块路径
  resolve: {
    // 别名
    alias: {
      // @ 表示 src 目录
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
~~~

# 12. 服务器配置 反向代理：

~~~ts
// vite.config.ts
export default defineConfig({
  plugins: [],
  // 解析模块路径
  resolve: {},
  // 服务器配置
  server: {
    // 主机地址
    host: '0.0.0.0',
    // 开启hmr
    hmr: true,
    // 端口号
    port: 3001,
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
  }
})
~~~

# 13. 自动导出引入组件和 vue, pinia 的 API：

~~~bash
# 自动导出引入组件
pnpm i unplugin-auto-import -D
~~~

~~~ts
// vite.config.ts
import autoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoImport({
      imports: ['vue', 'pinia'],
      dts: 'src/typing/auto-imports.d.ts'
    })
  ]
})
~~~

~~~ts
// 解决报错提示
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
  ]
})
~~~

~~~json
// tsconfig.json
{
  "vueCompilerOptions": {
    "nativeTags": ["block", "template", "component", "slot"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/*.vue",
    "src/*.ts",
    "src/*.d.ts",
    "src/*.tsx",
    "src/typing/*.d.ts"
  ]
}
~~~

~~~js
// .eslintrc.cjs
extends: [
    ...
    './.eslintrc-auto-import.json',
    'plugin:prettier/recommended' // 解决ESlint和Prettier冲突，放在最后
  ]
~~~

# 14. 引入 uni-ui 组件库：

~~~bash
pnpm i @dcloudio/uni-ui
~~~

~~~json
// 配置自动导入组件
// pages.json
{
  // 组件自动导入
  "easycom": {
    "autoscan": true,
    "custom": {
      // uni-ui 规则如下配置  
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue" 
    }
  },
  "pages": [
    // …省略
  ]
}
~~~

# 15. uniapp 和 微信原生 类型提示：

~~~bash
pnpm i -D @uni-helper/uni-ui-types miniprogram-api-typings @uni-helper/uni-app-types
~~~

~~~json
// 配置类型声明文件
// tsconfig.json
{
  "extends": "@vue/tsconfig/tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "lib": ["esnext", "dom"],
    "types": [
      "@dcloudio/types", // uni-app API 类型
      "miniprogram-api-typings", // 原生微信小程序类型
      "@uni-helper/uni-app-types", // uni-app 组件类型
      "@uni-helper/uni-ui-types" // uni-ui 组件类型
    ]
  },
  // vue 编译器类型，校验标签类型
  "vueCompilerOptions": {
    "nativeTags": ["block", "component", "template", "slot"]
  },
  // 编译器排除的文件
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/*.vue",
    "src/*.ts",
    "src/*.d.ts",
    "src/*.tsx",
    "src/typing/*.d.ts"
  ]
}
~~~

# 16. sass：

~~~bash
pnpm i sass sass-loader@10.1.1 -D
~~~

~~~scss
// 创建 static/styles 静态文件建议都放在static下
// common.scss 放置全局公共类样式
@import '@/uni.scss';

// 公共按钮样式
.dou-btn-primary {
  background-color: $uni-color-primary;
  color: $uni-text-color-inverse;
  box-shadow: 0 10px 10px -10px $uni-color-primary;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.dou-bg-primary {
  background-color: $uni-bg-color-grey;
  color: $uni-text-color;
}

// base.scss 初始化样式
view,
navigator,
input,
scroll-view {
  box-sizing: border-box;
}

button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

// 一行省略并添加省略号
.ellipsis-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  // 添加省略号
  &::after {
    content: '...';
    font-weight: bold;
  }
}

// 两行省略
.ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  // 添加省略号
  &::after {
    content: '...';
    font-weight: bold;
  }
}

// 全局页面背景色
page {
  background-color: #f5f5f5;
}

// iconfont.scss 阿里图标样式
@font-face {
  font-family: 'iconfont'; /* Project id 4483279 */
  src:
    url('//at.alicdn.com/t/c/font_4483279_rklego55dx.woff2?t=1711527922290') format('woff2'),
    url('//at.alicdn.com/t/c/font_4483279_rklego55dx.woff?t=1711527922290') format('woff'),
    url('//at.alicdn.com/t/c/font_4483279_rklego55dx.ttf?t=1711527922290') format('truetype');
}

[class^='dou-'],
[class*=' dou-'] {
  font-family: 'iconfont' !important;
  // font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dou-phone:before {
  content: '\e635';
}

.dou-qq:before {
  content: '\e65b';
}

.dou-email:before {
  content: '\e621';
}

.dou-password:before {
  content: '\e679';
}

.dou-weixin:before {
  content: '\e8bb';
}

.dou-username:before {
  content: '\e600';
}

// index.scss 统一导入导出
@import '@/uni.scss';
@import '@/static/styles/iconfont.scss';
@import '@/static/styles/base.scss';
@import '@/static/styles/common.scss';
~~~

~~~vue
<!-- 在 App.vue 中引入index.scss 可以不加 -->
<style lang="scss">
  @import '/static/styles/index.scss';
</style>
~~~

~~~ts
// 在 vite.config.ts 引入全局
css: {
    preprocessorOptions: {
      scss: {
        // 全局 scss 变量
        additionalData: `@import "@/uni.scss";`
      }
    }
  }

// main.ts
import '@/static/styles/index.scss'
~~~

# 17. pinia 持久化：

~~~bash
pnpm i pinia@2.0.36 pinia-plugin-persistedstate
~~~

~~~ts
// src/stores/modules/useCounterStore.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'count',
  () => {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
  },
  {
    persist: true
  }
)

// src/stores/index.ts
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate' // 数据持久化

const store = createPinia()
store.use(
  createPersistedState({
    storage: {
      getItem: uni.getStorageSync,
      setItem: uni.setStorageSync
    }
  })
)

export * from './modules/counter'

export default store

// main.ts
import { createSSRApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/stores'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app
  }
}
~~~

~~~vue
<!-- 使用 -->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title + store.count }}</text>
    </view>
    <uni-card>
      <text class="ellipsis-1">
        这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
      </text>
    </uni-card>
    <button type="primary" @click="store.increment">++</button>
  </view>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores'

  const store = useCounterStore()
  const title = ref('Hello')
</script>
~~~

# 18. unocss 使用：

~~~bash
pnpm i -D unocss unocss-preset-weapp
~~~

~~~ts
// vite.config.ts
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
})
~~~

~~~ts
// unocss.config.ts
import PresetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig } from 'unocss'

// 增加前缀dou-防止与tmui等自带的类名冲突,然后在标签class中写类名前缀dou-会有提示
const prefix = 'dou-'

const transformRules = {
  '.': '-d111-',
  '/': '-s111-',
  ':': '-c111-',
  '%': '-p111-',
  '!': '-e111-',
  '#': '-w111-',
  '(': '-b111l-',
  ')': '-b111r-',
  '[': '-f111l-',
  ']': '-f111r-',
  $: '-r111-',
  ',': '-r222-'
}

const { presetWeappAttributify, transformerAttributify } = extractorAttributify({
  transformRules,
  classPrefix: prefix
})

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    PresetWeapp({
      transformRules,
      prefix
    }),
    // attributify autocomplete
    presetWeappAttributify()
  ],
  shortcuts: [
    {
      'dou-center': 'dou-flex dou-justify-center dou-items-center'
    }
  ],
  transformers: [
    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass({
      transformRules
    })
  ]
})
~~~

~~~ts
// main.ts
import 'uno.css'
~~~

~~~ts
// 使用vue-scoped模式,该模式将生成的CSS注入Vue SFC<style scoped>进行分离
// vite.config.ts
plugins: [
      uni(),
      UnoCSS({mode: "vue-scoped"}),
]
// 注释或删除main.ts中的引入 否则会报错
// import 'uno.css'
~~~

# 19. px to rpx：

~~~bash
pnpm install postcss-pxtorpx-pro -D
~~~

~~~ts
// px转rpx
import PxToRpx from 'postcss-pxtorpx-pro'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 全局 scss 变量
        additionalData: `@import "@/uni.scss";`
      }
    },
    postcss: {
      plugins: [
        PxToRpx({
          unit: 'rpx',
          propList: ['*'],
          unitPrecision: 5,
          selectorBlackList: ['no-px'],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          transform: (x: number) => 2 * x
        })
      ]
    }
  }
});
~~~

~~~ts
// 自定义转化函数
// 创建 src/utils 
// helper.ts
// 将px转换为rpx
export function pxToRpx(px: string): number {
  // 设计宽度
  const designWidth = ref<number>(750)
  // 屏幕宽度
  const screenWidth = uni.getSystemInfoSync().screenWidth
  // 返回转换后的值
  return (Number.parseInt(px) * designWidth.value) / screenWidth
}

// 将rpx转换为px
export function rpxToPx(rpx: string): number {
  // 设计宽度
  const designWidth = ref<number>(750)
  // 屏幕宽度
  const screenWidth = uni.getSystemInfoSync().screenWidth
  // 返回转换后的值
  return (screenWidth * Number.parseInt(rpx)) / designWidth.value
}
~~~

~~~json
// 测试下
// pages.json
{
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "uni-app",
        "navigationStyle": "custom" // 去除原生导航栏
      }
    }
~~~

~~~vue
<!-- 使用 -->
<template>
  <view
    class="header dou-bg-blue"
    :style="{ height: pxToRpx(menuTop + menuHeight) + 'rpx' }"
  ></view>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores'
  import { pxToRpx } from '@/utils/helper'

  const store = useCounterStore()
  const title = ref('Hello')
  const menuTop = ref()
  const menuHeight = ref()
  onMounted(() => {
    const MenuButton = uni.getMenuButtonBoundingClientRect() as {
      top: number
      height: number
    }
    console.log(MenuButton)
    menuTop.value = MenuButton.top
    menuHeight.value = MenuButton.height
  })
</script>
~~~

# 20. 自定义组件：

~~~vue
<!-- 创建 components/ 用于放置公共组件 -->
<!-- go-navbar/go-navbar.vue 自定义头部导航栏组件 -->
~~~

~~~json
// 在 pages.json 中提供自动引入
// 组件自动导入
  "easycom": {
    "autoscan": true,
    "custom": {
      // uni-ui 规则如下配置
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      // 自定义组件
      "^go-(.*)": "@/components/go-$1/go-$1.vue"
    }
~~~

~~~vue
<!-- 创建 pages/index/components/ 用于放置首页组件模块 -->
<!-- Header.vue -->
<script setup lang="ts">
  // 状态栏高度
  const statusHeight = ref()
  // 头部高度
  const headerHeight = ref()
  // 左边空白区域
  const leftBlankArea = ref()
  // 右边空白区域
  const rightBlankArea = ref()
  // 导航栏高度
  const navHeight = ref()
  onMounted(() => {
    // 获取屏幕信息
    const { statusBarHeight, screenWidth } = uni.getWindowInfo()
    // 获取胶囊按钮信息
    const { top, bottom, height, left, width } = uni.getMenuButtonBoundingClientRect()
    statusHeight.value = statusBarHeight
    headerHeight.value = bottom + (top - statusBarHeight)
    leftBlankArea.value = left
    navHeight.value = height + (top - statusBarHeight) * 2
    rightBlankArea.value = screenWidth - left - width
  })
</script>

<template>
  <view class="header dou-bg-blue">
    <view class="header-content dou-bg-#fff">Header</view>
  </view>
</template>

<style scoped lang="scss">
  .header {
    position: relative;
    width: 100%;
    height: v-bind('headerHeight + `px`');
    .header-content {
      position: absolute;
      top: v-bind('statusHeight + `px`');
      width: v-bind('leftBlankArea + `px`');
      height: v-bind('navHeight + `px`');
      line-height: v-bind('navHeight + `px`');
      padding-left: v-bind('rightBlankArea + `px`');
    }
  }
</style>

<!-- index.vue 中引入 如下图样式 -->
~~~

![Snipaste_2024-03-28_20-52-49.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28faa7717d0d4d4bac05363977db4ec5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=485&h=115&s=6645&e=png&b=fafafa)

~~~ts
// 将计算好的数据持久化
// 创建 src/types 用于放置类型声明文件
// system.d.ts
export type SystemInfo = {
  // 状态栏高度
  statusNavHeight: number
  // 头部高度
  headerHeight: number
  // 左边空白区域
  leftBlankArea: number
  // 右边空白区域
  rightBlankArea: number
  // 导航栏高度
  navHeight: number
}

// stores/modules/system.ts
import type { SystemInfo } from '@/types/system'

export const useSystemStore = defineStore(
  'system',
  () => {
    const systemInfo = ref<SystemInfo>()

    // 设置系统信息
    const setSystemInfo = (info: SystemInfo) => {
      systemInfo.value = info
    }

    return {
      systemInfo,
      setSystemInfo
    }
  },
  {
    persist: true
  }
)

// stores/index.ts
export * from './modules/system'
~~~

~~~vue
<!-- App.vue 中编写持久化逻辑 -->
<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
  import { useSystemStore } from '@/stores'
  const systemStore = useSystemStore()

  onLaunch(() => {
    console.log('App Launch')
    const systemInfo = systemStore.systemInfo
    if (!systemInfo) {
      // 状态栏高度
      const statusNavHeight = ref()
      // 头部高度
      const headerHeight = ref()
      // 左边空白区域
      const leftBlankArea = ref()
      // 右边空白区域
      const rightBlankArea = ref()
      // 导航栏高度
      const navHeight = ref()
      // 获取屏幕信息
      const { statusBarHeight, screenWidth } = uni.getWindowInfo()
      // 获取胶囊按钮信息
      const { top, bottom, height, left, width } = uni.getMenuButtonBoundingClientRect()
      statusNavHeight.value = statusBarHeight
      headerHeight.value = bottom + (top - statusBarHeight)
      leftBlankArea.value = left
      navHeight.value = height + (top - statusBarHeight) * 2
      rightBlankArea.value = screenWidth - left - width

      systemStore.setSystemInfo({
        statusNavHeight: statusNavHeight.value,
        headerHeight: headerHeight.value,
        leftBlankArea: leftBlankArea.value,
        rightBlankArea: rightBlankArea.value,
        navHeight: navHeight.value
      })
    }
  })
</script>

<!-- 修改 index.vue -->
<script setup lang="ts">
  import { useSystemStore } from '@/stores'
  import type { SystemInfo } from '@/types/system'

  const systemStore = useSystemStore()
  const { headerHeight, statusNavHeight, navHeight, leftBlankArea, rightBlankArea } =
    systemStore.systemInfo as SystemInfo
</script>
~~~

# 21. 组件库使用：

~~~bash
# 有两款组件库 uv-ui 和 wot-design-uni
# https://www.uvui.cn/
# https://wot-design-uni.gitee.io/
# uv-ui 是 js 写的，并非 ts，可以通过 ttou/uv-typings 提供类型支持，但好像不太灵活的样子
# wot-design-uni 是 ts 写的，对于使用 ts 编码的体验会好很多
pnpm i wot-design-uni
~~~

~~~json
// pages.json
{
	"easycom": {
		"autoscan": true,
		"custom": {
		  "^wd-(.*)": "wot-design-uni/components/wd-$1/wd-$1.vue"
		}
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}

// tsconfig.json
{
  "compilerOptions": {
    "types": [
        "wot-design-uni/global.d.ts" // wot-design-uni 组件类型
    ]
  }
}
~~~

~~~vue
// 自定义主题 通过 TS
<script setup lang="ts">
  import Header from './components/Header.vue'
  import type { ConfigProviderThemeVars } from 'wot-design-uni'
  const themeVars: ConfigProviderThemeVars = {
    buttonSuccessBgColor: '#007aff'
  }
</script>

<template>
  <view class="dou-flex dou-flex-col dou-h-full">
    <Header />
    <scroll-view
      enable-back-to-top
      scroll-y
      refresher-enabled
      class="dou-flex-1 dou-overflow-hidden"
    >
      <wd-config-provider :theme-vars="themeVars">
        <wd-button type="success">主要按钮</wd-button>
      </wd-config-provider>

      <uni-card v-for="item in 100" :key="item">
        <text class="ellipsis-1">
          这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
        </text>
      </uni-card>
    </scroll-view>
  </view>
</template>
~~~

~~~css
/* 通过 css变量 覆盖默认样式 */
/* styles/wot.css */
/* 覆盖 wot-design-uni 默认样式 */
/* 覆盖 wot-design-uni 默认样式 */
:root,
page {
  --wot-color-theme: #007aff;
  --wot-color-success: #4cd964;
  --wot-color-warning: #8e785a;
  --wot-button-error-bg-color: #7b4e4c;
}
~~~

~~~ts
// main.ts
import '@/static/styles/wot.css'
~~~

~~~bash
# uv-ui 使用
pnpm i @climblee/uv-ui
# 类型提示
pnpm i -D @ttou/uv-typings
~~~

~~~json
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "@ttou/uv-typings/v3" // uv 类型
    ]
  }
}
~~~

~~~scss
// 在 uni.scss 中引入 uv 样式相关
/* uv-ui默认样式 */
// @import '@climblee/uv-ui/theme.scss';
/* uv-ui自定义样式 */
@import '@/static/styles/uv.scss';

// 引入 uv 基础样式 在 App.vue 中
<style lang="scss">
  @import '@climblee/uv-ui/index.scss';
</style>
~~~

~~~ts
// main.ts
import { createSSRApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/stores'
import uvUI from '@climblee/uv-ui'
import '@/static/styles/index.scss'
import '@/static/styles/wot.css'
// import { pxToRpx, rpxToPx } from '@/utils/helper'

// import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  // #ifdef VUE3
  app.use(uvUI)
  // #endif
  // 需要在Vue.use(uvUI)之后执行
  uni.$uv.setConfig({
    // 修改$uv.config对象的属性
    config: {
      // 修改默认单位为rpx，相当于执行 uni.$uv.config.unit = 'rpx'
      unit: 'rpx'
    },
    // 修改$uv.props对象的属性
    props: {
      // 修改uv-text组件的size参数的默认值，注意：默认值都要用default声明
      text: {
        color: {
          default: 'red'
        }
      }
      // 其他组件属性配置，具体的参数名称可以去每个组件的props.js中进行查看
      // ......
    }
  })
  // 全局挂载单位转换函数
  // app.config.globalProperties.$pxToRpx = pxToRpx
  // app.config.globalProperties.$rpxToPx = rpxToPx
  return {
    app
  }
}
~~~

~~~ts
// 修复报错问题
// env.d.ts 修复 import uvUI from '@climblee/uv-ui' 报红
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@climblee/uv-ui'

// 修复 $uv 报红
// 新建 types/uv.d.ts
declare module '@climblee/uv-ui' {
  export function install(): void

  interface config {
    // 单位
    unit: string
  }

  interface props {
    // text
    text: object
  }
  interface $uv {
    config: config
    props: props
  }

  global {
    interface Uni {
      $uv: $u
    }
  }
}
~~~

# 22. uno icons 图标库的使用：

- 官网：https://icones.js.org/
- unocss：https://alfred-skyblue.github.io/unocss-docs-cn/presets/icons

~~~bash
# 安装格式如下： pnpm i -D @iconify-json/[the-collection-you-want]
pnpm i -D @iconify-json/ant-design @unocss/preset-icons @iconify-json/carbon
~~~

~~~ts
// unocss.config.ts
import { defineConfig, presetIcons } from 'unocss'
export default defineConfig({
  presets: [
    ...
    presetIcons({
      collections: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        carbon: () => import('@iconify-json/carbon').then((i) => i.icons as any),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        antDesign: () => import('@iconify-json/ant-design').then((i) => i.icons as any)
      }
    })
  ]
})

// 当然presetIcons中的配置不止collections,collections中配置我们安装的carbon图标库，并且动态引入carbon包下的json（这个json存放的就是每一个图标的样式）
export interface Options {
  scale?: number // 缩放倍数 默认为1
  mode?: 'mask' | 'background-img' | 'auto'  // 模式 默认auto
  prefix?: string // 使用前缀 默认 `i-`
  warn?: boolean
  collections?: Record<string, IconifyJSON | undefined | (() => Awaitable<IconifyJSON | undefined>)>
  extraProperties?: Record<string, string> // 核外的属性，你可以书写额外的css属性到图标组件上
  /**
   * Rule layer
   * @default 'icons'
   */
  layer?: string
}
~~~

~~~vue
// 使用
<button class="i-carbon-moon dou-text-100" />
      <view class="i-ant-design:weibo-circle-outlined dou-text-red-500 dou-text-100" />
// 试了下，只能在这两个标签使用在别的标签使用不显示
~~~

# 23. 环境配置：

~~~bash
# .env
# 主机地址
VITE_HOST=0.0.0.0
# 端口号
VITE_PORT=3001

# 获取环境变量
process.env.NODE_ENV          // 应用运行的模式，比如vite.config.ts里
import.meta.env.VITE_HTTP     // src下的vue文件或其他ts文件里
~~~

~~~ts
// vite.config.ts
build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development'
  }

// 状态栏颜色
onReady() {
			//动态修改状态栏的颜色
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#ff0000'
			})
		}

{
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationStyle": "custom", // 去除原生导航栏
        "navigationBarTextStyle":"white" //状态栏字体颜色
      }
    }
~~~

# 24. 分包加载机制：

- [subpackages 文档](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)

~~~json
// 已我的界面为例，点击扫码图标会跳转到扫码界面 scanQR ，点击头像信息会跳转到用户详情 userInfo ，点击通知图标会跳转到消息通知界面 notification
// 创建 src/pagesMy 我的界面下的分包 且分包下可放置分包下的页面静态文件
// pages.json
"subPackages": [
    {
      "root": "myPages",
      "pages": [
        {
          "path": "userInfo/index",
          "style": {
            "navigationBarTitleText": "个人信息"
          }
        },
        {
          "path": "scanQR/index",
          "style": {
            "navigationBarTitleText": "扫码登录",
            "navigationStyle": "custom"
            // "navigationBarTextStyle":"white"
          }
        },
        {
          "path": "notification/index",
          "style": {
            "navigationBarTitleText": "消息通知",
            "navigationStyle": "custom"
            // "navigationBarTextStyle":"white"
          }
        }
      ]
    }
  ],
  "preloadRule": {
    "pages/my/my": {
      "network": "all",
      "packages": ["myPages"]
    }
  },
~~~

# 25. 在 style 中使用 unocss 样式：

- [相关文档](https://github.com/unocss/unocss/blob/main/packages/transformer-directives/README.md#apply)

~~~bash
pnpm i -D @unocss/transformer-directives
~~~

~~~ts
// unocss.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...
  transformers: [
    transformerDirectives() as any,
  ],
})
~~~

~~~scss
.card {
    @apply d-w-95% d-h-337 d-bg-#222426 d-mb-24rpx d-b-rd-16rpx d-overflow-hidden;
    &_top {
      @apply d-flex d-px-24rpx d-items-center d-justify-between d-w-100% d-h-64 d-bg-#2E3033 d-text-#838B99 d-text-26;
    }
  }
~~~

# 26. 通过 shortcuts 设置统一的样式：

~~~ts
// unocss.config.ts
export default defineConfig({
  // ...
  shortcuts: [
    {
      'd-full': 'd-w-full d-h-full',
      'd-center': 'd-middle-justify d-items-center',
      'd-middle-justify': 'd-flex d-justify-center',
      'd-between': 'd-middle-items d-justify-between',
      'd-around': 'd-middle-items d-justify-around',
      'd-middle-items': 'd-flex d-items-center',
      'd-center-full': 'd-center d-full',
      'd-col': 'd-flex d-flex-col'
    }
  ]
  // ...
})
~~~

# 27. 改为 npm 作为包管理工具：

~~~bash
# 将依赖删除和删除 pnpm-lock.yaml，因为官方建议使用 npm 或 yarn 作为包管理工具，使用 pnpm 会造成部分组件无法使用的问题

$ nvm ls # 查看当前node版本
$ nvm install 18.20.0 # 安装高版本node
$ nvm use 18.20.0 # 使用
$ nvm uninstall 18.16.0 # 删除之前的版本
$ nrm ls # 查看 npm 镜像
~~~

# 28. 对大于 200kb 本地资源的处理：

- [在线转码工具](https://tool.chinaz.com/tools/imgtobase/)

~~~scss
// 在 static/styles 新建 my-bg-base64.scss 
$my-bg-base64-code: url('转换后的编码文本');

// 在 uni.scss 下导入
// base64 大于 200kb 图片
@import '@/static/styles/my-bg-base64.scss';

// 在 my.vue 下使用
<style scoped lang="scss">
  .my_bg {
    background: $my-bg-base64-code;
  }
</style>
// 还是尽量少用
~~~

# 29. 跨分包自定义组件引用：

- https://blog.csdn.net/m0_65894854/article/details/129990505

~~~json
// manifest.json
{
    "mp-weixin": { /* 微信小程序特有相关 */
        "optimization": {
            // 开启分包
            "subPackages": true
        },
        "appid": "",
        "setting": {
            "urlCheck": false
        },
        "usingComponents": true
    },
}

├── App.vue
├── main.js
├── manifest.json
├── pages.json
├── uni.scss
├── packageA     
├── pages
    ├── index

// pages.json
{
    "pages": [...],
    "subPackages": [{
        "root": "packageA",
        "pages": [...]
    }],
    "globalStyle": [...],
}
                    
                    {
    "pages": [{
        "path": "pages/index",
        "style": {
              "navigationBarTitleText": "uni-app",
               // 4.设置占位组件
               "componentPlaceholder": {
                    // "其他分包自定义组件": "占位组件"
                   "package-com": "view"
               }
         }
 
     }],
    "subPackages": [...],
    "globalStyle": [...],
}

// 将自定义组件的引入规则改下
"^dou-(.*)": "@/components/dou/dou-$1/dou-$1.vue"
~~~

# 30. 使用 scss 混入函数 @mixin：

~~~scss
// 新建 static/styles/mixin.scss
// 几行省略
@mixin get-text-ellipsis-($line) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $line;
  -webkit-box-orient: vertical;
  // 添加省略号
  &::after {
    content: '...';
    font-weight: bold;
  }
}

// 在 uni.scss 下导入
// 混入函数
@import '@/static/styles/mixin.scss';

// 使用
<style scoped lang="scss">
  .script_introduce {
    @include get-text-ellipsis-(2);
  }
</style>

// 拓展：继承
%border-style {
  border:1px solid #aaa;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

// 使用
.container {
	@extend %border-style;
}
~~~

# 31. 在 uni-app 中编译 markdown：

- [相关文章](https://blog.csdn.net/weixin_45862594/article/details/137056577)

~~~json
// pages.json
"pages": [
    ...
    {
      "path": "pages/my/my",
      "style": {
        "navigationBarTitleText": "我的",
        "navigationStyle": "custom", // 去除原生导航栏
        "usingComponents": {
          "towxml": "/wxcomponents/towxml/towxml"
        }
      }
    }
  ],
~~~

~~~ts
// env.d.ts 用于ts 下解析js文件
declare module '@/wxcomponents/towxml/index.js'
declare module '@/wxcomponents/towxml/config.js'
declare module '@/wxcomponents/towxml/decode.js'
declare module '@/wxcomponents/towxml/towxml.js'
~~~

~~~js
// 修改 towxml/*.js 的代码转为 ES6 模式
// towxml/index.js
const md = require('./parse/markdown/index'),
  parse = require('./parse/index')

export const useTowxml = (str, type, option) => {
  option = option || {}
  let result
  switch (type) {
    case 'markdown':
      result = parse(md(str), option)
      break
    case 'html':
      result = parse(str, option)
      break
    default:
      throw new Error('Invalid type, only markdown and html are supported')
  }
  return result
}
~~~

~~~ts
// 使用
<script setup lang="ts">
  import { useTowxml } from '@/wxcomponents/towxml/index.js'

  const article = ref(
    '# 31. 在 uni-app 中编译 markdown： - [相关文章](https://blog.csdn.net/weixin_45862594/article/details/137056577)'
  )
  const content = useTowxml(article.value, 'markdown')
</script>

<template>
  <view class="my">
    <view class="i-carbon:3d-mpr-toggle d-text-red-500 d-text-200" />
    <towxml :nodes="content" />
  </view>
</template>

<style scoped lang="scss"></style>
~~~

# 32. 主题切换：

https://zhuanlan.zhihu.com/p/635568098

https://blog.csdn.net/jijunqing321/article/details/117435173
