const express=require("express")
const router=express.Router()
const pool=require('../pool.js')
//护卫日榜
router.get("/guardDay",(req,res)=>{
    var num=req.query.num;
    var size=parseInt(req.query.size);//一定要转整型，不然发送请求时会报错
    if(!num) {num=1}
    if(!size) {size=15}
    var offset=parseInt((num-1)*size)
    var sql='SELECT id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg FROM guard order by fight desc,id asc limit ?,?'
    if(offset===0){
        pool.query(sql,[offset,size],(err,result)=>{
            if(err) throw err;
            else{
                res.send(result)
            }
        })
    }else{
        res.send([])
    }
   
});

//女神榜
router.get("/goddess",(req,res)=>{
    var num=req.query.num;
    var size=parseInt(req.query.size);//一定要转整型，不然发送请求时会报错
    if(!num) {num=1}
    if(!size) {size=15}
    var offset=parseInt((num-1)*size)
    var sql='SELECT id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign FROM goddess order by contribute desc,id asc limit ?,?'
    if(offset===0){
        pool.query(sql,[offset,size],(err,result)=>{
            if(err) throw err;
            else{
                res.send(result)
            }
        })
    }else{
        res.send([])
    }
   
});

module.exports=router