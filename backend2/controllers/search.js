const express = require("express")
const router = express.Router()
const Info = require("../models/info")

router.get("/",async (req,res)=>{

   try{
   
   const result = await Info.find({$or:[{name:req.body.value.toLowerCase()},{age:req.body.value},{UID:req.body.value}]})
   if(result){
      
               res.status(200).json({
                  success:true,
                  message:"Found",
                  data:result
              })
            
     
   }
   }
   catch(err){
      res.status(200).json({
         success:false,
         message:"error",
         data:err

     })
   }
})




module.exports = router