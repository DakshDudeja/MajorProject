const { PythonShell } = require("python-shell")

const express = require("express")
const router = express.Router()
const multer = require("multer")

const Aadhar = require("../models/aadhar")



const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, '/src/biometric');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname);
    }
  });

const upload = multer({dest: 'uploads/'});

router.post('/', upload.single('file'), (req, res) => {

    console.log("hello1")
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
    
    }

    Biometric(req.file.filename,res)

  });

function Biometric(file,res){

  

  let options = {

    args:`/home/ankit/Desktop/SIH/backend/uploads/${file}`
};``

    PythonShell.run('./controllers/biometric.py', options, function (err, results) {
            console.log("results",results)
            console.log(err)
            res.status(200).json({
              success:true,
              data:results
            })
    })

}



async function findAadhar(UID,res){
try{
  const result = Aadhar.findOne({UID:UID})
  if(result){
    res.status(200).json({
      success:true,
      data:result
    })
  }
}
catch(err){
  console.log(err)
  res.status(200).json({
    success:false,
    data:result
  })
}


}

// router.post("/",(req,res)=>{
//     PythonShell.run('biometric.py', options, function (err, results) {
//             console.log(results)
//     })


// })

// Biometric()


module.exports = router