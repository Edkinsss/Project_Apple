const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })

schema.methods.speaker = function(){
    console.log(this.name + " this is incredible ")
}

const technology = mongoose.model('technology', schema);


const technique = new technology({ name: 'apple' });
technique.save().then(() => technique.speaker());