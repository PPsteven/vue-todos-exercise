<template>
  <!--绑定点击事件goList),并且判断当todoId 时候 item.id时,文字高亮度-->
  <div class="list-todos">
    <!-- 绑定class，当items循环中的id等于我们设置的选中todoId时候,就会加上active这个calss,这样样式就会发生变化。-->
    <a @click="goList(item.id)" class="list-todo list activeListClass" :class="{'active': item.id === todoId}" v-for="(item,index) in todoList" :key="index">
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
      todoId: '', // 默认选中id,
      todoNum: 0 // 新增一个状态来判断代办事项的数据
    };
  },
  methods: {
    goList(id) { // 选中菜单，切换视图
      this.todoId = id;
    }, 
    addTodoList() { // 新增菜单
      this.$store.commit('ADDTODO');
      this.goList(this.todoList[this.todoList.length - 1].id);
    } 
  },
  watch: { // 监听 this.todoId 的变化
    'todoId'(id) {
      this.$router.push({ name: 'todo', params: {id: id}});
    }
  },
  created() {
    this.goList(this.todoList[0].id);
  },
  computed: {
    todoList(){
      const getters = this.$store.getters.getTodoList; // 获取 vuex数据
      if (getters.length < this.todoNum && getters.length ){ // 删除的话，切换视图
        this.goList(getters[0].id);
      }
      this.todoNum = getters.length; // 更新列表条目
      return getters; // 返回vuex getters.js 定义的getTodoList数据
    }
  }
};
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>

