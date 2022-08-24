const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const InfoSchema = new Schema({
   
   
   description:[],
 
   photo:{
    type:"String"
   },
   station_address:{
    type:"String"
   },
   name:{
      type:"String"
  },
  UID:{
      type:"String"
      
  },
  newphoto:{
   type:"String"
  },
  photo:{
      type:"String",
      
  },
  fingerprint:{
      type:"String",
      
  },
  address:{
      type:"String"
      
  },
  age:{
      type:"String"
  },
  gender:{
      type:"String"
  },
  dob:{
      type:"String"
  },
  mobile:{
      type:"String"
  }
   

},{timestamps:true})

module.exports = Mongoose.model('Info', InfoSchema);
