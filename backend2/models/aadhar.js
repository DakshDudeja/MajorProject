const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// [{"id":1,"Name":"Meridel Scholar","UID":114685973090,"Father Name":"Meridel","Date of Birth":"23-04-2007","Gender":"Female","Mobile Number":8924654799,"Address":"6194 Forster Street"},



const aadharSchema = new Schema({
   
    id:{
        type:"String"
       
    }, 
    name:{
        type:"String"
    },
    UID:{
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

module.exports = Mongoose.model('Aadhar', aadharSchema);
