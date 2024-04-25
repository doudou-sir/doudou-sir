<script setup lang="ts">
  import { useTowxml } from '@/wxcomponents/towxml/index.js'

  const article = ref(
    `# 31. 在 uni-app 中编译 markdown：
## 31. 在 uni-app 中编译 markdown：
### 31. 在 uni-app 中编译 markdown：
#### 31. 在 uni-app 中编译 markdown：
##### 31. 在 uni-app 中编译 markdown：
###### 31. 在 uni-app 中编译 markdown：
- [相关文章](pages/index/index)

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
`
  )
  const content = useTowxml(article.value, 'markdown', {
    theme: 'dark',
    events: {
      tap: (e: any) => {
        console.log(e)
      }
    }
  })
</script>

<template>
  <scroll-view scroll-y class="my">
    <view class="i-carbon:3d-mpr-toggle d-text-red-500 d-text-200" />
    <towxml :nodes="content" />
  </scroll-view>
</template>

<style scoped lang="scss"></style>
