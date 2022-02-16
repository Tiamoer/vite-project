<script lang="ts">
import {defineComponent, ref, getCurrentInstance, provide, reactive} from 'vue'
import {darkTheme} from 'naive-ui'

export default defineComponent({
  setup() {
    const theme = reactive({name:'theme', style:darkTheme})
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
