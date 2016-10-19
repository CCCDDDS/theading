//web 项目框架
var express = require ('express');
//导入 request 模块 http 请求模块插件
var request = require('request');
//实例化express模块
var app = express();
//术语：路由

// res : response 服务器发送给浏览器的对象
app.route('/api/audio').get(function(req, res){
	//接收js使用ajax发送的数据
	var query = req.query;
	console.log(query.type);
	var url = query.url;
	delete query.url;

	request.post({
		url: url,
		formData:req.query
	},function(error,response,data){
		res.send(data);
	});
	
});
//开启静态服务器，把制定的目录作为跟目录 
app.use(express.static("./dest"));
//	res.send("hello world");
//	res.send({
//		"data":[1,2,3,4]
//	})
//});
//	创建一个http请求
var server  = require('http').createServer(app);
server.listen(9010, "0.0.0.0", function() {
	console.log('http://127.0.0.1:9010');
});
