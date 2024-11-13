const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const technology = mongoose.model('technology', { name: String });
const technique = new technology({ name: 'apple' });
technique.save().then(() => console.log('nice try'));