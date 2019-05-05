//使用express构建web服务器
const express=require("express");//引入express模块
const cors=require("cors");//引入跨域模块
const bodyParser=require("body-parser");//中间件
const session=require("express-session");//session模块
const mainlogin=require("./routes/mainlogin_router.js")//路由器

var app=express();
var server=app.listen(7000);//监听端口
//服务器地址 127.0.0.1:7000+路由
app.use(session({//配置session
    secret:"128字符串",
    resave:false,
    saveUninitialized:true
}))
app.use(cors({//配置跨域
    "origin":["http://127.0.0.1:8080"],
    credentials:true
}))
//中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源，http://127.0.0.1:8000/img/xxx.jpg
app.use(express.static('public'));
//挂载路由
app.use("/mainlogin",mainlogin);