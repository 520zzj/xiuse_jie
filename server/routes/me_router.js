const express=require("express")
const router=express.Router()
const pool=require("../pool")
const multer=require('multer')
const fs=require('fs')
let path = require("path");
//获取图片地址列表
router.get("/down",(req,res)=>{
    var sql=`select id,img_src from photo`
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        else{
            res.send(result)
        }
    })
})

//上传单个图片
router.post("/uploadImage", multer({
    //设置文件存储路径
   dest: 'upload'   //upload文件如果不存在则会自己创建一个。
}).single('file'),(req,res)=>{
    // console.log(req)
    //upload.single("file"):上传单个图片，（）里面为input的name值
    var fileName=""//文件名
    var fid=req.body.uid//获取用户的id
    // console.log(fid)
    if(req.file!==undefined){
        fileName=new Date().getTime()+"_"+fid+"_"+req.file.originalname//文件名重命名
        fs.renameSync(req.file.path,__dirname+"../../upload/"+fileName)//将文件路径替换，显示图片，fs.renameSync(oldpath,newpath)
    }
    //把图片的新地址存到数据库
    var sql=`insert into photo(id,img_src,fid) values(null,?,?)`
    var img_src="//127.0.0.1:7000/"+fileName
    pool.query(sql,[img_src,fid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send({code:-1})
        }else{
            res.send({code:1})
        }
    })
    
})
//删除单张照片
router.get("/delPhoto",(req,res)=>{
    var id=req.query.id
    var fid=req.query.uid
    var sql=`delete from photo where id=? and fid=?`
    pool.query(sql,[id,fid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send({code:-1})
        }else{
            res.send({code:1})
        }
    })
})
//上传头像
router.post("/upAvatar",multer({dest:'upload'}).single('file'),(req,res)=>{
    var uid=req.body.uid
    //上传了图片
    var fileName=new Date().getTime()+"_"+uid+"_"+req.file.originalname
    fs.renameSync(req.file.path,__dirname+"../../upload/"+fileName)
    //保存地址到数据库,每个用户都有一个默认的图片和地址，更新地址就可以
    var avatar="//127.0.0.1:7000/"+fileName
    var sql=`update xs_user set avatar=? where uid=?`
    pool.query(sql,[avatar,uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send({code:-1})
        }else{
            res.send({code:1})
        }
    })
})
//获取头像地址
router.get("/downAvatar",(req,res)=>{
    var uid=req.query.uid
    var sql=`select avatar from xs_user where uid=?`
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1})
        }else{
            res.send({code:1,avatar:result[0].avatar})
        }
    })
})

module.exports=router