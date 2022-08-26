const express = require("express")
const router = express.Router()
const Aadhar = require("../models/aadhar")
const data = require("../MOCK_DATA.json")

router.post("/",async (req,res)=>{
    
    console.log(req.body)
try{
const info = await Aadhar.findOne({UID:req.body.id})
console.log(info)
if(info !== null){
    console.log("djk")
    res.status(200).json({success:true,data:info})

}
else{
    console.log("djk")

    res.status(200).json({success:false})
  
}
}
catch(err){
    console.log(err)
res.status(200).json({success:false})
}


})



module.exports = router