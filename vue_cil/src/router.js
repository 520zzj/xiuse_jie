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
import home from "./components/home.vue"
import square from "./components/square.vue"
import guard from "./components/guard.vue"


import pageOne from "./components/pages/pageOne"
import pageTwo from "./components/pages/pageTwo"
import pageThree from "./components/pages/pageThree"
import guardHead from "./components/guard/guardHead"
import guardSwiper from "./components/guard/guardSwiper"

import guardOne from "./components/guard/guardOne"
import guardTwo from "./components/guard/guardTwo"
import guardThree from "./components/guard/guardThree"
import guardFour from "./components/guard/guardFour"
import me from "./components/me.vue"
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
    {path:"/test",component:test,children:[
      {path:"/pageOne",component:pageOne},
      {path:"/pageTwo",component:pageTwo},
      {path:"/pageThree",component:pageThree},
    ]},
    {path:"/phoneReg",component:phoneReg},
    {path:"/accountLog",component:accountLog},
    {path:"/home",component:home},
    {path:"/square",component:square},
    {path:"/guardHead",component:guardHead},
    {path:"/guardSwiper",component:guardSwiper},
    {path:"/guard",component:guard},
    {path:"/guardOne",component:guardOne},
    {path:"/guardTwo",component:guardTwo},
    {path:"/guardThree",component:guardThree},
    {path:"/guardFour",component:guardFour},
  ]
})
//npm run dev 启动脚手架