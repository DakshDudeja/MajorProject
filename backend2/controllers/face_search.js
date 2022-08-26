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

router.post('/', async(req, res) => {

     face(res)

  });

 

function face(res){


    let options = {

        args:`/home/ankit/Desktop/SIH-New-build/backend2/uploads/`
    };``

        PythonShell.run('./controllers/faces/face_recog_sih.py', options, async function (err, results) {
          
          if(results){

        
            var uid = ""
            if(results[0] !== null){

            
            if(results[0][0] === "mudit"){
              uid = "654039758264";
            }
            else if(results[0][0] === "ankit"){
              uid = "654039758265";
            }
            else if(results[0][0] === "sourav"){
              uid = "654039758261";
            }
            else if(results[0][0] === "pranjal"){
              uid = "654039758262";
            }
            else if(results[0][0] === "mahak"){
              uid = "654039758263";
            }
            else if(results[0][0] === "daksh"){
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
          console.log(err)

           
    })
}

module.exports = router