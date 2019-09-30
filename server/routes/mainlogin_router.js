const express=require('express');
const router=express.Router();
const pool=require('../pool')

//用户名+密码注册
router.post("/register",(req,res)=>{
    // var phoneNum=req.body.phoneNum
    var upwd=req.body.upwd
    var uname=req.body.uname
    var sex=req.body.sex

    var sql=`insert into xs_user(uid,uname,upwd,avatar,phoneNum,sex) values(null,?,?,"//127.0.0.1:7000/img/default_avatar.jpg",null,?)`
    pool.query(sql,[uname,upwd,sex],(err,result)=>{
        if(err) throw err;
        if(result.lenght==0){
            res.send({code:-1})
        }else{
            res.send({code:1})
        }
    })
})
//验证是否占用用户名
router.post("/regUname",(req,res)=>{
    var uname=req.body.uname
    var sql=`select uid from xs_user where uname=?`
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名可用"})
        }else{
            res.send({code:1,msg:"用户名占用"})
        }
    })
})
//登录
router.post("/login",(req,res)=>{
    var uname=req.body.uname
    var upwd=req.body.upwd
    var sql=`select uid,sex,uname,avatar from xs_user where uname=? and upwd=?`
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1})
        }else{
            res.send({code:1,uid:result[0].uid,sex:result[0].sex,uname:result[0].uname,avatar:result[0].avatar})
        }
    })
})



module.exports=router;