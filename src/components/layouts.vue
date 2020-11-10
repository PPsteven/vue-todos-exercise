<template>
  <section class="container">
    <!-- 左侧菜单 -->
    <section class="menu">
      <menus></menus>
    </section>

    <!-- 右侧列表部分交给路由 -->
    <div class="content-container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import menus from './menus';
import todo from './todo';
export default {
  components: {
    menus,
    todo
  }
};
</script>

<style lang="less">
@import '../common/style/layouts.less';
</style>
