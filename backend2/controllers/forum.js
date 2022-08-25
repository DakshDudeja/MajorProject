const express = require("express")
const router = express.Router()
const Forum = require("../models/forum")



// const upload = multer({dest: 'uploads/forum'});

router.post('/', (req, res) => {

  try{
    const newcase = new Forum({
      photo:req.body.url,
      address:req.body.address,
      pincode:req.body.pincode,
      purpose:req.body.purpose,
      name:req.body.name
    })
      
    newcase.save()

    res.status(200).json({
      success:true
    
    })
  }
  
catch(err){
  res.status(200).json({
    success:false
  
  })
}


    });


router.get("/all",async (req,res)=>{
  console.log("Hi")
try{
  const result = await Forum.find()

  res.status(200).json({
    success:true,
    data:result
  })
}
catch(err){
  res.status(200).json({
    success:false
  })
}


})

    

router.post("/single",(req,res)=>{
  try{
    const result = await Forum.findOne({_id:req.body.id})
  
    res.status(200).json({
      success:true,
      data:result
    })
  }
  catch(err){
    res.status(200).json({
      success:false
    })
  }
})



//   backend2/uploads/caf79eab60c8d29853f82eec81cbc4d8
