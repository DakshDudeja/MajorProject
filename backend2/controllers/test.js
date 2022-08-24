const express = require("express")
const router = express.Router()
const Info = require("../models/info")
const data = require("../MOCK_DATA(1).json")
const Aadhar = require("../models/aadhar")
async function add(){


    const res = await Aadhar.find();

    try{

    for(var i = 0;i<res.length;i++){
        data.map((each)=>{
            const newinfo = new Info({
                description:each.description,
                UId:res[i].UID,
                photo:each.photo,
                station_address:each.station_address,
                name:each.name,
                age:each.age,
                fingerpint:each.fingerprint,
                gender:each.gender,
                address:each.address,
                newphoto:"",
                dob:each.dob,
                mobile:each.mobile

            })
            const des = {
                des:"Krishna, a 5-year old boy, 65 cms. Fair complexion, round face, the well-built physique has been missing from Golf Links, New Delhi since 16th August 2010. He has a scar on his forehead. He is wearing a white shirt and blue shorts and was carrying a school bag when seen last. He speaks Hindi and Punjabi.",
                updatedby:"Ram Singh",
                updateOn:Date.now()
            }
            newinfo.description.push(des)
            newinfo.save()
        })
    }
}
   catch(err){
console.log(err)
   }

}


module.exports = add