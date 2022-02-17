<script lang="ts">
import {defineComponent, ref, getCurrentInstance, provide, reactive} from 'vue'
import {darkTheme} from 'naive-ui'

export default defineComponent({
  setup() {
    // 设置主题样式
    let themeStyle:any = darkTheme
    // 获取存储在本地的主题参数，以解决页面刷新后页面主题会重置为黑色的问题
    const THEME_FLAG:any = window.localStorage.getItem('THEME_FLAG')
    THEME_FLAG == 'light' ? themeStyle = null : themeStyle = darkTheme
    const theme = reactive({name:'theme', style:themeStyle})
    provide('theme', theme)
    return {
      theme
    }
  }
})
</script>

<template>
  <!-- 设置主题 -->
  <n-config-provider :theme="theme.style">
    <!-- 设置body主题 -->
    <n-global-style/>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </n-config-provider>
</template>

<style>

</style>
