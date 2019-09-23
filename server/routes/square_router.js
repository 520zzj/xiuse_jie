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
    var sql=`SELECT id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,sourceSrc FROM hall limit ?,?`
    pool.query(sql,[offset,size],(err,result)=>{
        if(err) throw err;
        else{
            res.send(result)
        }
    })
})

// 获取最近观看的主播信息
router.get("/getScanned",(req,res)=>{
    var fid=req.query.uid
    var num=req.query.num;
    var size=parseInt(req.query.size)
    if(!num) num=1
    if(!size) size=10
    var offset=parseInt((num-1)*size)
    var sql=`select * FROM xs_scanned where fid=? limit ?,? `//按条件分页查询
    pool.query(sql,[fid,offset,size],(err,result)=>{
        if(err) throw err;
        else res.send(result)
    })
})
//保存最近观看的主播信息
router.post("/saveScanned",(req,res)=>{
    
    var hid=req.body.hid
    var hallBg_src=req.body.hallBg_src
    var hallRanking_src=req.body.hallRanking_src
    var RankIcon_src=req.body.RankIcon_src
    var sign=req.body.sign
    var watchIcon_src=req.body.watchIcon_src
    var watchNum=req.body.watchNum
    var fid=req.body.uid
    var sourceSrc=req.body.sourceSrc
    var sql1=`select id from xs_scanned where hid=? and fid=?`
    var sql2=`insert into xs_scanned(id,hid,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,fid,sourceSrc) values(null,?,?,?,?,?,?,?,?,?)`
    function fn2(len){
            if(len==0){//未被存储到数据库的主播信息才能存储到数据库
                return new Promise(function(resolve,rejuct){                  
                        pool.query(sql2,[hid,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,fid,sourceSrc],(err,result)=>{
                            if(err) throw err;
                            if(result.affectedRows>0){
                                res.send({code:1})
                            }else{ 
                                res.send({code:-1})
                            }
                        })
                    }  
                )           
            }
        
    }; 
    function fn1(){
        return new Promise(function(resolve,reject){
            pool.query(sql1,[hid,fid],(err,result)=>{
                if(err) throw err;
                else resolve(result.length)
            })
        })
    };
    fn1().then(fn2)
    // console.log(fn1)
})

//  保存关注的主播信息
router.post("/saveFocus",(req,res)=>{
    var hid=req.body.hid
    var hallBg_src=req.body.hallBg_src
    var hallRanking_src=req.body.hallRanking_src
    var RankIcon_src=req.body.RankIcon_src
    var sign=req.body.sign
    var watchIcon_src=req.body.watchIcon_src
    var watchNum=req.body.watchNum
    var fid=req.body.uid
    var sourceSrc=req.body.sourceSrc
    var sql=`insert into xs_focus(id,hid,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,fid,sourceSrc) values(null,?,?,?,?,?,?,?,?,?)`
    pool.query(sql,[hid,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,fid,sourceSrc],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send({code:-1})
        }else{
            res.send({code:1})
        }
    })
})
//取消关注
router.get("/canncelFocus",(req,res)=>{
    var fid=req.query.uid
    var hid=req.query.hid
    var sql=`delete from xs_focus where fid=? and hid=?`
    pool.query(sql,[fid,hid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send({code:-1})
        }else{
            res.send({code:1})
        }

    })
})
//获取单个主播的关注信息状态
router.get("/singleFocus",(req,res)=>{
    var fid=req.query.uid
    var hid=req.query.hid
    var sql=`select id from xs_focus where fid=? and hid=?`
    pool.query(sql,[fid,hid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1})
        }else{
            res.send({code:1})
        }
    })
})
// 获取当前用户所有关注的主播列表
router.get("/focusList",(req,res)=>{
    var fid=req.query.uid//当前用户的id
    var num=req.query.num;
    var size=parseInt(req.query.size);
    if(!num){
        num=1
    }
    if(!size){size=10}
    var offset=parseInt((num-1)*size)
    var sql=`SELECT id,hid,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,fid,sourceSrc FROM xs_focus where fid=? limit ?,?`
    pool.query(sql,[fid,offset,size],(err,result)=>{
        if(err) throw err;
        else{
            res.send(result)
        }
    })
    
})
//获取点击视频的当前视频的源地址
router.get("/sourceSrc",(req,res)=>{
    var id=req.query.id
    var sql=`select sourceSrc from hall where id=?`
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        else res.send(result)
    })
})
module.exports=router