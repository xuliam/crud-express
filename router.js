/* 
路由模塊
職責：
    處理路由
    根據不同的請求方法/請求路徑設置不同的函數；

*/
const User = require('./user.js');
//加載express
const express = require('express');
//1. 創建一個路由容器
const router = express.Router();
//2. 把路由都掛載到router路由容器中

let fs = require('fs');

let users =[
    {id: 1, name: "小明"},
    {id: 2, name: "大笑"}

]

router.get('/', function(req, res){
    // fs.readFile('./db.json', 'utf8', function(err, data){
    //     if(err){
    //         return res.status(500).send('Server error.');
    //     }
    //     res.render('index.html',{
    //         fruits: [
    //             '蘋果',
    //             '香蕉'
    //         ],
    //         // 從文件中讀取的數據一定是字符串，所以這裏要手動轉成對象；
    //         students: JSON.parse(data).students

    //     });
    // });
    User.findAll(function(err, data){
        if(err){
            return res.status(500).send('Server error.');
        }res.render('index.html',{
            fruits: [
                 '蘋果',
                 '香蕉'
             ],
            //接受的數據把它轉變成對象；
            students:data
        })
    })
});

//請求所有用戶
router.get('/users', (req, res)=>{
    res.json(users);
});

// //請求ID用戶
// router.get('/users/:id', (req, res)=>{
//     const userId = parseInt(req.params.id, 10);
//     const user = users.find(u => u.id ===userId);

//     if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }    
// });

//請求新增用戶表單 get方法
router.get('/users/new', (req, res)=>{
    res.render('new.html');
});

// 保單post方法
router.post('/users/new', (req, res)=>{
    /* 
    1. 獲取表單數據
    2. 處理
    3. 發送響應
    */
   User.save(req.body, function(err){
    if (err){
        return res.status(500).send('server error....');
    }
    res.redirect('/');
   })
   console.log(req.body);
})



//put 請求：更新一個單個用戶
//delete 請求： 刪除一個單個用戶

//3. 把router 導出
module.exports = router;