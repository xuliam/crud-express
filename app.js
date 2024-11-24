/* 
入口文件
指責：
    創建服務
    做一些服務相關配置
        模板引擎
        解析表單post請求體？
        提供靜態資源服務？
    掛載路由
    監聽端口啟動服務
*/
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const host = 'localhost';

//實例化express
const app = express();

/* 
配置bodyParse
只要加入這個配置，則在req請求對象上會多出個body屬性
即：可以通過req.body來獲取表單post請求體數據
另外artTemplate還有bodyParse都是中間件，要在掛載路由器之前；
*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))


//把router掛載到app中
app.use(router);



app.listen(port, function(){
    console.log('running 3000...');
});

