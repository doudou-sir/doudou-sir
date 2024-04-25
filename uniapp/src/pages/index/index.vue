<script setup lang="ts">
  import Header from './components/Header.vue'
</script>

<template>
  <view class="d-flex d-flex-col d-h-full">
    <Header />
    <scroll-view enable-back-to-top scroll-y refresher-enabled class="d-flex-1 d-overflow-hidden">
      <uv-button type="success" text="确定"></uv-button>
      <uv-text type="primary" text="主色"></uv-text>
      <button class="i-carbon-moon d-text-100" />
      <view class="i-carbon:3d-mpr-toggle d-text-red-500 d-text-100" />
      <uni-card v-for="item in 100" :key="item">
        <text class="uv-line-1">
          这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
        </text>
      </uni-card>
    </scroll-view>
  </view>
</template>

<style lang="scss"></style>
