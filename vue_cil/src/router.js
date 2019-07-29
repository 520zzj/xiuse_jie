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

import guardDay from "./components/guard/guardDay"
import guardWeek from "./components/guard/guardWeek"
import twGd from "./components/guard/twGd"
import lwGd from "./components/guard/lwGd"
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
      {path:"/pageOne",component:pageOne,meta:{index:1,keepAlive:true}},
      {path:"/pageTwo",component:pageTwo,meta:{index:2,keepAlive:true}},
      {path:"/pageThree",component:pageThree,meta:{index:3,keepAlive:true}},
    ]},
    {path:"/phoneReg",component:phoneReg},
    {path:"/accountLog",component:accountLog},
    {path:"/home",component:home},
    {path:"/square",component:square},
    {path:"/guardHead",component:guardHead},
    {path:"/guardSwiper",component:guardSwiper},
    {path:"/guard",component:guard},
    {path:"/guardDay",component:guardDay},
    {path:"/guardWeek",component:guardWeek},
    {path:"/twGd",component:twGd},
    {path:"/lwGd",component:lwGd},
  ]
})
//npm run dev 启动脚手架