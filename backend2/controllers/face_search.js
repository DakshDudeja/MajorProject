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

    face(req.file.filename,res)

  });

 

function face(file,res){


    let options = {

        args:`/home/ankit/Desktop/SIH-New-build/backend2/uploads/${file}`
    };``

        PythonShell.run('./controllers/face_search.py', options, async function (err, results) {
          const demo_data = [
            {"id":"1001","Name":"sourav jha","UID":"654039758261","Father Name":"Ankit Jha","Date of birth":"03/07/2001","gender":"male","Mobile Number":"9599245905","address":"a7/27-a phase 5 aya nagar, new delhi"},
            {"id":"1002","Name":"Pranjal Gupta","UID":"654039758262","Father Name":"Rajesh Gupta","Date of birth":"02/20/2001","gender":"Female","mobile no":"1234567898","address":"b5/35 rohini ,new delhi"},
            {"id":"1003","Name":"Mahak Chaudhary","UID":"654039758263","Father Name":"Ramesh Chaudhary","Date of birth":"03/07/2001","gender":"female","mobile no":"9876543212","address":"i12 rajnagar,up"},
            {"id":"1004","Name":"Mudit Sharma","UID":"654039758264","Father Name":"Somesh Sharma","Date of birth":"06/22/2001","gender":"male","mobile no":"9876543213","address":"a9/27-a phase 6 aya nagar, new delhi"},
            {"id":"1005","Name":"Ankit Verma","UID":"654039758265","Father Name":"Rohit Verma","Date of birth":"08/05/2001","gender":"male","mobile no":"9876543214","address":"b7/35 rohini ,new delhi"},
            {"id":"1006","Name":"Daksh Dudeja","UID":"654039758266","Father Name":"Rahul Dudeja","Date of birth":"09/03/2001","gender":"male","mobile no":"9876543215","address":"i212 rajnagar,up"}
            ]
            var uid = ""
            console.log(results[0] === "mudit.jpeg")
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
            

            if(results){
              console.log("vhjgh")
              // console.log(results[0].substring(0,18))
              console.log(uid)
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


            console.log(err)
    })
}

module.exports = router