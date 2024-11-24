const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//1. 連結數據庫
mongoose.connect('mongodb://localhost/user');

//2. 設計文檔結構
const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: Number,
		enum: [0, 1],
        default: 0
	},
	age: {
		type: Number
		
	},
    hobbies: {
		type: String
	}
    
});

  //3. 將文檔結構發佈為模型
  /* 
  mongoose.model方法就是用來將一個架構發佈為model
  第一個參數：傳入一個大寫單數名詞，表示數據庫名稱；mongoose會自動會講大寫名詞的字符串生成小寫複數的集合
            例如這裡會把User 編成users的集合名稱
  第二個參數：架構Schema
  */
  var User = mongoose.model('User', userSchema);

  //4. 有了模型模型構造函數，就可以可以使用這個構造函數對users集合進行crud
  var user = new User({
    name: "王姐建",
    gender: 0,
    age: 48,
    hobbies: "吃饭和睡觉"
  })

   user.save().then(()=>console.log(user));


//   async function run() {
//     // 4. Connect to MongoDB
//     await connect('mongodb://127.0.0.1:27017/test');
  
//     const user = new User({
//       name: 'Bill',
//       email: 'bill@initech.com',
//       avatar: 'https://i.imgur.com/dM7Thhn.png'
//     });
//     await user.save();
  
//     console.log(user.email); // 'bill@initech.com'
//   }
  