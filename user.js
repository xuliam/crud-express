const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/user');

const { Schema } = mongoose;

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


//发布数据模型
module.exports = mongoose.model('User', userSchema);
//导出数据模型（里面是构造函数）；



// const schema = new mongoose.Schema({ name: String, size: String });
// const Tank = mongoose.model('Tank', schema);