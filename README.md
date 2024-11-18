brew services start mongodb-community@8.0
brew services stop mongodb-community@8.0

//進入數據庫
mongosh
//顯示所有數據庫
show dbs
//顯示目前在那個數據庫
 db
 //使用其他數據庫， 如 itcast
 use itcast
 //顯示當前數據庫的集合 collection
 show collections
 //顯示集合的具體數據， 例如users
 db.users.find()

 exit
