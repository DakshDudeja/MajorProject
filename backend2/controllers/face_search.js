const { PythonShell } = require("python-shell")

const express = require("express")
const router = express.Router()
const multer = require("multer")
const Aadhar = require("../models/aadhar")
const Info = require("../models/info")
// router.post("/",(req,res)=>{
//     PythonShell.run('face.py', options, function (err, results) {
//             console.log(results)
//     })
// })

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
    console.log(req.file)
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
    
    }

    const t1 = await Aadhar.find({$and:[{gender:req.body.gender,state:req.body.state}]})


    face(req.file.filename,res)

  });

 

function face(file,res){


    let options = {

        args:`/home/ankit/Desktop/SIH-New-build/backend2/uploads/${file}`
    };``

        PythonShell.run('./controllers/face_search.py', options, async function (err, results) {
          
          if(results){

        
            var uid = ""
            if(results !== null){

            
            if(results[0] === "mudit.jpeg"){
              uid = "654039758264";
            }
            else if(results[0] === "ankit.jpeg"){
              uid = "654039758265";
            }
            else if(results[0] === "sourav.jpeg"){
              uid = "654039758261";
            }
            else if(results[0] === "pranjal.jpeg"){
              uid = "654039758262";
            }
            else if(results[0] === "mahak.jpeg"){
              uid = "654039758263";
            }
            else if(results[0] === "daksh_dudeja.jpeg"){
              uid = "654039758266";
            }
            
          }
          else{
            res.status(200).json({
              success:false
            })
          }

           
              // console.log(results[0].substring(0,18))
            
            const r1 = await Info.findOne({UID:uid})
            // console.log(r1)
            if(r1){
              res.status(200).json({
                success:true,
                data:r1
              })
            }
            else{
              const r2 = await Aadhar.findOne({UID:uid})
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
          else{
            res.status(200).json({
              success:false
            })  
          }


           
    })
}

module.exports = router