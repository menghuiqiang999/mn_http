#This is a function from Moonlight
#Quick Start
##install
    npm install mn_http
##Basic Usage

    const Http= require("mn_http");

    const http= new Http();

###get

param host - such as  qyapi.weixin.qq.com

param path   - such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param callback

example

    http.get(host,path,function(err,result){
          ......
    });


###post

param host - Such as  qyapi.weixin.qq.com

param uri - Such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......

param content

param callback

example

    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/user/create?access_token=" + access_token;
    var content=JSON.stringify(data);
    http.post (host,path,content,function(err,result){
        ......
    });

