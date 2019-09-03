const express=require('express')
const router=express.Router()
const pool=require('../pool')

//大厅数据
router.get("/hall",(req,res)=>{
    var num=req.query.num;
    var size=parseInt(req.query.size);
    if(!num){
        num=1
    }
    if(!size){size=10}
    var offset=parseInt((num-1)*size)
    var sql=`SELECT id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription FROM hall limit ?,?`
    pool.query(sql,[offset,size],(err,result)=>{
        if(err) throw err;
        else{
            res.send(result)
        }
    })
})
// 关注
router.get("/focus",(req,res)=>{
    var num=req.query.num;
    var size=parseInt(req.query.size);
    if(!num){
        num=1
    }
    if(!size){size=10}
    var offset=parseInt((num-1)*size)
    var sql=`SELECT id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,fid FROM xs_focus limit ?,?`
    pool.query(sql,[offset,size],(err,result)=>{
        if(err) throw err;
        else{
            res.send(result)
        }
    })
    
})
// 获取最近观看的主播信息
router.get("/getScanned",(req,res)=>{
    var scanned=req.query.uid
    var num=req.query.num;
    var size=parseInt(req.query.size)
    if(!num) num=1
    if(!size) size=10
    var offset=parseInt((num-1)*size)
    var sql=`select * FROM hall where scanned=? limit ?,? `//按条件分页查询
    pool.query(sql,[scanned,offset,size],(err,result)=>{
        if(err) throw err;
        else res.send(result)
    })
})
//保存最近观看的主播信息
router.post("/saveScanned",(req,res)=>{
    var scanned=req.body.uid
    var id=req.body.id
    console.log(scanned,id)
    var sql=`UPDATE hall SET scanned=? WHERE id=?`
    pool.query(sql,[scanned,id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1})
        }else{
            res.send({code:-1})
        }
    })
})

module.exports=router