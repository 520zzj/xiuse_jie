//引入路由
import Vue from 'vue'
import Router from 'vue-router'
//引入自定义组件
import HelloContainer from "./components/HelloWorld.vue"
import mainlogin from "./components/mainlogin.vue"
import wblogin from "./components/wblogin.vue"
import indexlist from "./components/indexlist.vue"
import phonelogin from "./components/phonelogin.vue"
import test from "./components/test.vue"
import phoneReg from "./components/phoneReg.vue"
import accountLog from "./components/accountLog"

Vue.use(Router)
//启动脚手架npm run dev 看package.json
//地址栏访问脚手架 127.0.0.1:8080看package.json
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:"/mainlogin",component:mainlogin},
    {path:"/wblogin",component:wblogin},
    {path:"/indexlist",component:indexlist},
    {path:"/phonelogin",component:phonelogin},
    {path:"/test",component:test},
    {path:"/phoneReg",component:phoneReg},
    {path:"/accountLog",component:accountLog}
  ]
})
//npm run dev 启动脚手架