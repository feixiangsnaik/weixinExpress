var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
  user:String,
  pwd:String
})
var userModel = mongoose.model('userModel',userSchema)
module.exports = userModel