const mongoose = require('mongoose')
mongoose.connect('mongodb://root:Aa159367@155.94.235.104:27017/weixin?authMechanism=SCRAM-SHA-1&authSource=admin',err=>{
  if(err){
    console.log('shujuku连接失败')
  }else{
    console.log('连接成功')
  }
})
// module.exports = mongoose