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
    var sql=`SELECT id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum FROM hall limit ?,?`
    pool.query(sql,[offset,size],(err,result)=>{
        if(err)throw err;
       if(result.length>0){
          res.send(result)
       }
    })
})

module.exports=router