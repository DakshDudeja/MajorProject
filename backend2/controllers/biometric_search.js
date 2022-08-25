const { PythonShell } = require("python-shell")

const express = require("express")
const router = express.Router()
const multer = require("multer")

const Aadhar = require("../models/aadhar")
const Info = require("../models/info")


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

    args:`D:/SIH_Kanpur/backend2/uploads/${file}`
};``

    PythonShell.run('./controllers/biometric.py', options, async function (err, results) {
            console.log("results",results)
            
            if(results){
              console.log("vhjgh")
              // console.log(results[0].substring(0,18))
            const r1 = await Info.findOne({UID:results[0].substring(0,12)})
            // console.log(r1)
            if(r1){
              res.status(200).json({
                success:true,
                data:r1
              })
            }
            else{
              const r2 = await Aadhar.findOne({UID:results[0].substring(0,12)})
              // console.log(r2)
              if(r2){
                res.status(200).json({
                  success:true,
                  data:r2
                })   
              }
              else{
                res.status(200).json({
                  success:false
                })  
              }
            }
            }
            console.log(err)
            
    })

}





// router.post("/",(req,res)=>{
//     PythonShell.run('biometric.py', options, function (err, results) {
//             console.log(results)
//     })


// })

// Biometric()


module.exports = router