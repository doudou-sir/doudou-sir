<script setup lang="ts">
  import { useSystemStore } from '@/stores'
  import type { SystemInfo } from '@/types/system'

  const systemStore = useSystemStore()
  const { headerHeight, statusNavHeight, navHeight, leftBlankArea, rightBlankArea } =
    systemStore.systemInfo as SystemInfo
</script>

<template>
  <view class="header d-bg-blue">
    <view class="header-content d-bg-#fff">Header</view>
  </view>
</template>

<style scoped lang="scss">
  .header {
    position: relative;
    width: 100%;
    height: v-bind('headerHeight + `px`');
    .header-content {
      position: absolute;
      top: v-bind('statusNavHeight + `px`');
      width: v-bind('leftBlankArea + `px`');
      height: v-bind('navHeight + `px`');
      line-height: v-bind('navHeight + `px`');
      padding-left: v-bind('rightBlankArea + `px`');
    }
  }
</style>
