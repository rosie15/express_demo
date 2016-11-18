/*
* @Author: rosie
* @Date:   2016-09-26 14:48:37
* @Last Modified by:   rosie
* @Last Modified time: 2016-11-18 16:55:29
*/

var mongoose = require("mongoose")
var Schema = mongoose.Schema

var connectOptions = "mongodb://localhost:27017/user"
var connection = mongoose.createConnection(connectOptions)
// mongoose.connect("mongodb://localhost:27017/demo")

var userSchema = new Schema({
  name: String,
  password: String,
})

var User = mongoose.model("user", userSchema)

exports.create = function(name, password) {
  var user = new User({
    name: "Hello Kitty",
    password: "whogetsthepassword",
  })

  user.save(function(error) {
    if(error) {
      //how to correctly handle errors
      return 0
    }else {
      //how to handle success
      return 1
    }
  })
}

exports.delete = function(name) {
  User.remove({name: name}, function(error){
    if(error) {
      //how to handle error
      return 0
    }else {
      //how to handle success
      return 1
    }
  })
}

exports.read = function(name) {
  //read one and read the list, how to do thatTT
  User.find({name: name})
}

exports.update = function(name) {
  //how to update, got no clueTT
}