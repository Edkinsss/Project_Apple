var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/tc2024")
var User = require("./models/user.js").User

var first_user = new User({
    username: "Edkinss",
    password: "1226"
})

first_user.save();