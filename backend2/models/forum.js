const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const forumSchema = new Schema({
    photo:{
        type:String
    },
    address:{
        type:String
    },
    purpose:{
        type:String
    },
    name:{
        type:String
    },
    pincode:{
        type:String
    }

},{timestamps:true})


module.exports = Mongoose.model('Forum', forumSchema);
