const express = require("express")
const router = express.Router()
const Aadhar = require("../models/aadhar")
const data = require("../MOCK_DATA.json")

router.get("/",async (req,res)=>{
    
try{
const info = await Aadhar.findOne({id:req.body.id})

res.status(200).json({success:true,data:info})
}
catch(err){
res.status(200).json({success:false})
}


})



module.exports = router