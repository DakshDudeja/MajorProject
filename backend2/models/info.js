const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const InfoSchema = new Schema({
   
   aadharId:{
    type:"String"
   },
   photo:{
    type:"String"
   },
   station_address:{
    type:"String"
   },
   date:{
      type:"String"
   }


},{timestamps:true})

module.exports = Mongoose.model('Info', InfoSchema);
