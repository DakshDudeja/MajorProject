require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aadhar = require("./controllers/aadhar")
const info = require("./controllers/info")
const biometric = require("./controllers/biometric_search")
const search = require("./controllers/search")
const mongoose = require("mongoose")
const add = require("./controllers/test")
const port = 5000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const uri= process.env.MONGO_URI;
console.log(uri)
mongoose.connect(uri, { useNewUrlParser:true,useUnifiedTopology:true });
const connection=mongoose.connection;
try
{
    connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})
}
catch(err){
    console.log(err);
}

app.use("/aadhar",aadhar)
app.use("/info",info)
app.use("/search",search)
app.use("/biometric",biometric)

// add()

app.listen(port, () => {
  console.log("connected on port",port)
});


