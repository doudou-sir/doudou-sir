// 将px转换为rpx
export function pxToRpx(px: number): number {
  // 设计宽度
  const designWidth = ref<number>(750)
  // 屏幕宽度
  const screenWidth = uni.getSystemInfoSync().screenWidth
  // 返回转换后的值
  return (px * designWidth.value) / screenWidth
}

// 将rpx转换为px
export function rpxToPx(rpx: number): number {
  // 设计宽度
  const designWidth = ref<number>(750)
  // 屏幕宽度
  const screenWidth = uni.getSystemInfoSync().screenWidth
  // 返回转换后的值
  return (screenWidth * rpx) / designWidth.value
}
