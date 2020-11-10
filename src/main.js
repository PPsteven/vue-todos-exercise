import Vue from 'vue'  //引入vue模块
import App from './App.vue' //引入vue组件
import router from './router' // 引入路由配置文件
import store from './store' // 引入 vuex

Vue.config.productionTip = false // 关闭生产模式下给出的提示

new Vue({ // 创建一个 Vue 的根实例
  router, // 注入路由配置。
  store, // 注入vuex
  render: h => h(App) // 渲染根模板
}).$mount('#app') // 注入组件

