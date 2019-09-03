const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/down",(req,res)=>{
    var sql=`select id,img_src from photo`
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        else{
            res.send(result)
        }
    })
})

module.exports=router