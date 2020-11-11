import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters';

Vue.use(Vuex); // 安装 Vuex 插件

export default new Vuex.Store({
  // 严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
  strict: true,
  // 创建初始应用全局状态变量
  state: {
    // 指我们的待办事项列表数据
    todoList: [
        { title: '星期一', count: 1, locked: true , id: 'a', isDelete: false },
        { title: '星期二', count: 2, locked: false, id: 'b', isDelete: false },
        { title: '星期三', count: 3, locked: true, id: 'c', isDelete: false },
    ],  
  },
  // 定义所需的 mutations， 用来操作 state 数据
  mutations: {
    EDITTODE(state, data) { // 定义名为 EDITTODE函数用作改变todoList的值
      state.todoList = data;
    },
    ADDTODO(state) { // 添加新的 TODO 菜单
      state.todoList.push(
        { title: '星期四', count: 3, locked: true, id: Math.floor(Math.random() * 1000 + 1), isDelete: false }
      )
    },
    UPDATETODE(state, todo) {
      state.todoList.some((t, index) => {
        if (t.id == todo.id) {
            t.title = todo.title;
            t.locked = todo.locked;
            t.isDelete = todo.isDelete;
            return true;
        }
      });
    }
  },
  getters: getters, // 获取数据
  actions: {},
  modules: {}
})
