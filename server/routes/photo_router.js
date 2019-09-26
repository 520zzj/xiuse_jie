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
    console.log(req)
    //upload.single("file"):上传单个图片，（）里面为input的name值
    var fileName=""//文件名
    var fid=req.body.uid//获取用户的id
    console.log(fid)
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
module.exports=router