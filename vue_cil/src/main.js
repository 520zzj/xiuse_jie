//main.js引入其他库，并配置库
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方组件库在下面引

import axios from "axios"//引入axios模块
axios.defaults.withCredentials=true//配置跨域选项,跨域访问要保存session中的数据
Vue.prototype.axios=axios//配置到vue的原型对象中  this.axios.get/post 

import qs from 'qs'//引入qs搭配axios使用，使axios可携带参数
Vue.prototype.qs=qs
//引入mint-ui，完整引入,会在node_modules下自动找mint-ui
//全局引入
// import MintUi from 'mint-ui'
// //还需单独引入mint-ui的样式表
import'mint-ui/lib/style.css'
// //将mint-ui库中所有的组件注册到Vue的实例中
// Vue.use(MintUi);
// 按需引入
import { Header, Button, IndexList, IndexSection,Cell,Swipe, SwipeItem  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入阿里图标库的字体图标css文件,属于单个引入，不用注册
// import "./font/iconfont.css"


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
// 引入mui的js文件
// import './lib/mui/js/mui.js'


//引入vantui组件库
//全局引入
// import vantUI from "vant"
import 'vant/lib/index.css'
// Vue.use(vantUI)
// 按需引入
import { Icon,Tabbar, TabbarItem,Row, Col , Tab, Tabs , Loading} from 'vant';
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Row).use(Col);
Vue.use(Tab).use(Tabs);
Vue.use(Loading);

//引入vue-awesome-swiper组件
// import swiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css' 
// Vue.use(swiper)

//引入vuex
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    width_s:document.documentElement.clientWidth//屏幕宽度
  }
})
router.beforeEach((to,from,next)=>{
  console.log(store.state.width_s)
  next();
  })
  
//   //引入vue-touch
// import vueTouch from "vue-touch"
// Vue.use(vueTouch)
// vueTouch.config.swipe={
//   threshold:store.state.width_s/2
//   //设置滑动距离
// }

//引入上下拉刷新的组件,全局注册
// import MescrollVue from 'mescroll.js/mescroll.vue'
// Vue.use(MescrollVue)

//引入基础css样式
import './assets/css/reset.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
