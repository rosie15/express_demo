/*
* @Author: rosie
* @Date:   2016-09-23 17:05:14
* @Last Modified by:   rosie
* @Last Modified time: 2016-11-18 18:07:14
*/

var express = require("express")
var session = require("express-session")
var MongoStore = require("connect-mongo")(session)

var app = express()

var user = require("./controllers/user.js")
app.set("view engine", "ejs")
app.engine('.html', require('ejs').renderFile)
app.use(express.static(__dirname + "/public"))

app.use(session({
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({
    url: "mongodb://localhost:27017/demo",
    ttl: 14 * 24 * 60 * 60,
    touchAfter: 24 * 3600,
  }),
  secret: "128 bytes ramdom string",
  cookie: {
    path: "/",
    httpOnly: true,
    secure: false,
    maxAge: null,
  },
}))

app.use(user)

//cross origin
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next();
// })

app.listen(3000, function() {
  console.log("Listening on port 3000...")
})