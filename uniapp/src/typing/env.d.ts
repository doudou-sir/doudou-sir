/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@climblee/uv-ui'
declare module '@/wxcomponents/towxml/index.js'
declare module '@/wxcomponents/towxml/config.js'
declare module '@/wxcomponents/towxml/decode.js'
declare module '@/wxcomponents/towxml/towxml.js'
