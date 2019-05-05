import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Mint from 'mint-ui'
import mainlogin from "./components/mainlogin.vue"
import wblogin from "./components/wblogin.vue"
import indexlist from "./components/indexlist.vue"
import phonelogin from "./components/phonelogin.vue"
Vue.use(Mint);
Vue.use(Router)
//启动脚手架npm run dev 看package.json
//地址栏访问脚手架 127.0.0.1:8080看package.json
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:"/mainlogin",component:mainlogin},
    {path:"/wblogin",component:wblogin},
    {path:"/indexlist",component:indexlist},
    {path:"/phonelogin",component:phonelogin}
  ]
})
//npm run serve 启动脚手架