<template>
  <n-layout>
    <n-layout-header bordered style="height: 60px; padding: 0 64px" >
      <n-grid x-gap="12" :cols="2" style="height: 100%">
        <n-gi>
          <div class="header-container-logo">
            <img src="../assets/image/logo.svg" alt="" style="height: 40px; margin-right: 10px">
            <strong style="font-size: 24px">SLM &nbsp;</strong>
            <p>简约的服务器管理</p>
          </div>
        </n-gi>
        <n-gi>
          <div style="height: 100%">
            <n-space justify="end" style="height: 100%;align-items: center;margin: 0">
              <n-button>Oops!</n-button>

              <!-- Github -->
              <n-tooltip trigger="hover">
                <template #trigger>
                  <n-icon :component="LogoGithub" size="18px"></n-icon>
                </template>
                Github
              </n-tooltip>

              <!-- 用户头像板块 -->
              <n-popselect :options="avatar_options" size="medium">
                <n-avatar
                    round
                    size="small"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                />
              </n-popselect>
            </n-space>
          </div>
        </n-gi>
      </n-grid>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider bordered show-trigger content-style="padding: 24px;" :width="240" collapse-mode="width" :collapsed-width="64">海淀桥</n-layout-sider>
      <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
    </n-layout>
    <n-layout-footer bordered style="height: 60px">成府路</n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {LogoGithub} from '@vicons/ionicons5'

export default defineComponent({
  components: {
    LogoGithub,
  },
  setup() {
    return {
      avatar_options: [
        {
          label: '个人设置',
          value: 'user_option'
        },
        {
          label: '退出登录',
          value: 'exits'
        }
      ],
      LogoGithub,
    }
  }
})
</script>

<style scoped lang="less">

.header-container-logo {
  display: flex;
  height: 100%;
  align-items: center;
}

.header-container-menu {
  height: 100%;
}
</style>