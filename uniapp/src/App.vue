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
  onShow(() => {
    console.log('App Show')
  })
  onHide(() => {
    console.log('App Hide')
  })
</script>
<style lang="scss">
  @import '@climblee/uv-ui/index.scss';
</style>
