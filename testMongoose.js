const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Technology = require('./models/technology.js').Technology
var techno = new Technology({
   title: "macOS",
   nick: "macOS",
})
techno.save();