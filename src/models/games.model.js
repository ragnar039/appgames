const mongoose = require('mongoose');
const {Schema} = mongoose;

const GameSchema = new Schema({
    title:{type:String, required:true},
    description: {type:String},
    image:{type:String}
});

module.exports = mongoose.model('game', GameSchema);
