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
    './.eslintrc-auto-import.json',
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
    // 禁止使用未声明的变量
    '@typescript-eslint/no-var-requires': ['off'],
    // 禁止使用未声明的this
    '@typescript-eslint/no-explicit-any': ['off'],
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
