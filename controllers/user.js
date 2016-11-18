/*
* @Author: rosie
* @Date:   2016-09-23 17:29:29
* @Last Modified by:   rosie
* @Last Modified time: 2016-11-18 18:11:02
*/

var express = require("express")
var router = express.Router()
var UserModel = require("../models/user.model.js")

router.get("/user", function(req, res) {
  res.render("user.html")
})

router.post("/user", function(req, res) {
  res.send("hello post")
})

module.exports = router