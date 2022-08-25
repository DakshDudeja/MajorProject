const express = require("express")
const router = express.Router()
const Forum = require("../models/forum")

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, '/src/biometric');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname);
    }
  });

const upload = multer({dest: 'uploads/forum'});

// router.post('/', upload.single('file'), (req, res) => {

    
//     if (!req.file) {
//       console.log("No file received");
//       return res.send({
//         success: false
//       });
  
//     } else {
//       console.log('file received');
    
//     }


//   });

//   backend2/uploads/caf79eab60c8d29853f82eec81cbc4d8
