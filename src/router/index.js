import Vue from 'vue'
import VueRouter from 'vue-router'
import layouts from '@/components/layouts'; 
import todo from '@/components/todo';
// webpack 的 alias， @ 代表的是 src 文件夹
Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // 根路由
    name: 'Home',
    component: layouts, 
    children: [{
      path: '/todo/:id', 
      name: 'todo', 
      component: todo // 子组件
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
