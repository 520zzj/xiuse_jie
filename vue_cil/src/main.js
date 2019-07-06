//main.js引入其他库，并配置库
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方组件库在下面引

import axios from "axios"//引入axios模块
axios.defaults.withCredentials=true//配置跨域选项,跨域访问要保存session中的数据
Vue.prototype.axios=axios//配置到vue的原型对象中  this.axios.get/post 

//引入mint-ui，完整引入,会在node_modules下自动找mint-ui
import MintUi from 'mint-ui'
//还需单独引入mint-ui的样式表
import'mint-ui/lib/style.css'
//将mint-ui库中所有的组件注册到Vue的实例中
Vue.use(MintUi);

//引入字体图标css文件,属于单个引入，不用注册
import "./font/iconfont.css"


Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
