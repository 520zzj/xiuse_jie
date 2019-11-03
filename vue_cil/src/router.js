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
import speedReg from "./components/speedReg.vue"
import accountLog from "./components/accountLog"
import square from "./components/square.vue"
import home from "./components/home.vue"


import pageOne from "./components/pages/pageOne"
import pageTwo from "./components/pages/pageTwo"
import pageThree from "./components/pages/pageThree"
import guardHead from "./components/guardHead"


import me from "./components/me.vue"
import ranking from "./components/ranking"
import find from "./components/find"
import guard from "./components/guard"
import live from "./components/live"
import delPhoto from "./components/delPhoto"
Vue.use(Router)
//启动脚手架npm run dev 看package.json
//地址栏访问脚手架 127.0.0.1:8080看package.json
export default new Router({
  routes: [
    {path:'/',component:HelloContainer,redirect:"mainlogin"},
    {path:"/mainlogin",component:mainlogin},
    {path:"/wblogin",component:wblogin},
    {path:"/indexlist",component:indexlist},
    {path:"/phonelogin",component:phonelogin},
    {path:"/test",component:test,children:[
      {path:"/pageOne",component:pageOne,meta:{index:1,keepAlive:true}},
      {path:"/pageTwo",component:pageTwo,meta:{index:2,keepAlive:true}},
      {path:"/pageThree",component:pageThree,meta:{index:3,keepAlive:true}},
    ]},
    {path:"/speedReg",component:speedReg},
    {path:"/accountLog",component:accountLog},
    {path:"/guardHead",component:guardHead},
    {path:"/home",component:home,redirect:"square",children:[
      { path:"/find",component:find},
      {path:"/ranking",component:ranking},
      {path:"/guard",component:guard},
      {path:"/square",component:square,name:'square'},
      {path:"/me",component:me}
    ]},
    {path:"/live",component:live,name:'live'},
    {path:"/delPhoto",component:delPhoto}
  ]
})
//npm run dev 启动脚手架