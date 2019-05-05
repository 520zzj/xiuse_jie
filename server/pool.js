//创建连接池，来连接数据库
const mysql=require("mysql");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"xiuse",
    connectionLimit:10
});
module.exports=pool;
