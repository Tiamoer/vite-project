<template>
  <div class="container">
    <!-- 定义一个按钮来切换主题 -->
    <div id="themeChange">
      <n-switch :rail-style="railStyle" @update:value="changeTheme">
        <template #unchecked>浅色</template>
        <template #checked>深色</template>
      </n-switch>
    </div>

    <n-card class="content">
      <div class="title" style="text-align: center">
        <h1>SLM @Tiamoer</h1>
        <h4>tiamoer@outlook.com</h4>
      </div>
      <div class="panel">
        <n-card>
          <n-tabs default-value="signin" size="large">
            <n-tab-pane name="signin" tab="登录">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input/>
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input/>
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong @click="loginFunction">
                登录
              </n-button>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="注册">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input/>
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input/>
                </n-form-item-row>
                <n-form-item-row label="重复密码">
                  <n-input/>
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong>
                注册
              </n-button>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'
import {darkTheme} from 'naive-ui'
import {useRouter} from 'vue-router'

export default defineComponent({
  setup() {

    // 删除本地存储的主题标志
    window.localStorage.removeItem('THEME_FLAG')

    const theme:any = inject('theme')
    const router = useRouter()

    // 登录事件
    const loginFunction = () => {
      router.push({
        path: '/Home',
        query: {
          id: 2,
          token: null
        }
      })
    }

    // 主题开关按钮的切换事件
    const changeTheme = () => {
      theme.style = (theme.style == null) ? darkTheme : null
    }

    return {
      railStyle: ({checked}) => {
        // 修改开关的背景颜色
        const style = {}
        // 深色切换为浅色时的方法
        if (checked) {
          style.background = '#3b3b3b'
          window.localStorage.setItem('THEME_FLAG', 'light')
        } else {
          window.localStorage.setItem('THEME_FLAG', 'dark')
        }
        return style
      },
      changeTheme,
      loginFunction
    }
  }
})
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  background: url("../assets/image/大插画.webp") no-repeat;
  background-size: contain;

  #themeChange {
    position: absolute;
    top: 10%;
    right: 5%;
  }

  .content {
    opacity: 0.9;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>