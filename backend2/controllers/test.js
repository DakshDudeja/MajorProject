const express = require("express")
const router = express.Router()
const Info = require("../models/info")
const Adata = require("../MOCK_DATA.json")
const data = require("../MOCK_DATA(1).json")
const Aadhar = require("../models/aadhar")
async function add(){


    const res = await Aadhar.find();
    
    try{

        console.log("ghvh")

    for(var i = 0;i<res.length;i++){
        var each = data[i]
            const newinfo = new Info({
                id:res[i].id,
                description:each.description,
                UID:res[i].UID,
                photo:res[i].photo,
                station_address:each.station_address,
                name:res[i].name,
                age:res[i].age,
                fingerpint:res[i].fingerprint,
                gender:res[i].gender,
                address:res[i].address,
                newphoto:"",
                dob:res[i].dob,
                mobile:res[i].mobile,
                father_name:res[i].father_name

            })
            const des = {
                des:"Krishna, a 5-year old boy, 65 cms. Fair complexion, round face, the well-built physique has been missing from Golf Links, New Delhi since 16th August 2010. He has a scar on his forehead. He is wearing a white shirt and blue shorts and was carrying a school bag when seen last. He speaks Hindi and Punjabi.",
                updatedby:"Ram Singh",
                updateOn:Date.now()
            }
            newinfo.description.push(des)
            newinfo.save()
        
    }
}
   catch(err){
console.log(err)
   }

}


// {"id":1,"Name":"Meridel Scholar","UID":114685973090,"Father Name":"Meridel","Date of Birth":"23-04-2007","Gender":"Female","Mobile Number":8924654799,"Address":"6194 Forster Street"}

async function addAadhar(){


Adata.map((each)=>{

const d = new Aadhar({
    id:each.id,
    name:each.Name,
    UID:each.UID,
    father_name:each["Father Name"],
    dob:each["Date of Birth"],
    gender:each.Gender,
    mobile:each["Mobile Number"],
    address:each.Address,
    fingerprint:"",
    photo:"",
})


d.save()



})


}


module.exports = add