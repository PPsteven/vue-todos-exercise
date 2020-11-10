<template>
  <!--绑定点击事件goList),并且判断当todoId 时候 item.id时,文字高亮度-->
  <div class="list-todos">
    <!-- 绑定class，当items循环中的id等于我们设置的选中todoId时候,就会加上active这个calss,这样样式就会发生变化。-->
    <a @click="goList(item.id)" class="list-todo list activeListClass" :class="{'active': item.id === todoId}" v-for="(item,index) in items" :key="index">
      <!-- 把以前的item换成todoList -->
      <span class="icon-lock" v-if="item.locked"></span>
      <span class="count-list" v-if="item.count > 0">{{item.count}}</span>
      {{item.title}}
    </a>
    <a class=" link-list-new" @click="addTodoList">
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: '星期一', count: 1, locked: true , id: 'a'},
        { title: '星期二', count: 2, locked: false, id: 'b'},
        { title: '星期四', count: 3, locked: true, id: 'c'},
      ], // 菜单数据
      todoId: '', // 默认选中id,
      todoNum: 0 // 新增一个状态来判断代办事项的数据
    };
  },
  methods: {
    goList(id) {}, // 选中菜单，切换视图
    addTodoList() {} // 新增菜单
  }
};
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>

