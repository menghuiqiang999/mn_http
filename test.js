/**
 * Created by Administrator on 2018/12/10.
 */
const pageName="test.js";

const Http= require('./Http');

const http= new Http();


http.get("baidu.com","",(err,result) =>{
    if(err){console.log(err)}
    console.log(result);
});