import PresetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig, presetIcons } from 'unocss'
// npm i -D @unocss/transformer-directives 在 style 中使用 unocss 样式
import transformerDirectives from '@unocss/transformer-directives'

const prefix = 'd-'

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
    presetWeappAttributify(),
    presetIcons({
      collections: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        carbon: () => import('@iconify-json/carbon').then((i) => i.icons as any)
      }
    })
  ],
  shortcuts: [
    {
      'd-center': 'd-flex d-justify-center d-items-center'
    }
  ],
  transformers: [
    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerDirectives
    transformerDirectives() as any,

    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass({
      transformRules
    })
  ]
})
