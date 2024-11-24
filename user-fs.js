/* 
數據操作文件模塊
*/
const fs = require('fs');
const dbPath = './db.json';

// 獲取列表
exports.findAll = function(callback){
    fs.readFile(dbPath, 'utf8', function(err, data){
        if(err){
            return callback(err);
        }
        callback(null, JSON.parse(data).students)
    })
}



// 添加user
exports.save = function(student, callback){
    fs.readFile(dbPath, 'utf8', function(err, data){
        if(err){
            return callback(err)
        }
        let students = JSON.parse(data).students

        //添加Id
        student.id = students[students.length - 1].id +1
        //傳到數組
        students.push(student)

        //把對象數組轉成字符串
        const fileData = JSON.stringify({
            students: students
        })

        //把字符串保存在文件中
        fs.writeFile(dbPath, fileData, function(){
            if(err){
                return callback(err)
            }
            callback(null);
        })
    })
}

// 更新
exports.update = function(){
    fs.readFile(dbPath, 'utf8', function(err, data){
        if(err){
            return callback(err)
        }
        let students = JSON.parse(data).students

        
    })
}

// updateById({

// })

// 刪除
exports.delete = function(){

}