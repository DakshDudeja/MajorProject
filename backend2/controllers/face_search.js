const { PythonShell } = require("python-shell")

const express = require("express")
const router = express.Router()

router.post("/",(req,res)=>{
    PythonShell.run('face.py', options, function (err, results) {
            console.log(results)
    })
})


module.exports = router