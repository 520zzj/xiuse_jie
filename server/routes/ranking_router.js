const express=require('express')
const router=express.Router()
const pool=require('../pool.js')

//日榜
router.get("/dayRanking",(req,res)=>{
    var num=req.query.num;
    var size=parseInt(req.query.size);
    if(!num){
        num=1
    }
    if(!size){size=15}
    var offset=parseInt((num-1)*size)
    //按订阅量排序后分页
    var sql=`SELECT id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum FROM hall order by subscription desc,id asc limit ?,?`
    if(offset===0){//只需要第一页数据
        pool.query(sql,[offset,size],(err,result)=>{
            if(err) throw err;
            else{
                res.send(result)
            }
        })
    }else{//返回空数组，mescroll组件自动判断，而取消下拉
        res.send([])
    }
   
})

module.exports=router