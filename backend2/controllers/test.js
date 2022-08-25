const express = require("express")
const router = express.Router()
const Info = require("../models/info")
const Adata = require("../aadhar.json")
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

const demo_data = [
    {"id":"1001","Name":"sourav jha","UID":"654039758261","Father Name":"Ankit Jha","Date of birth":"03/07/2001","gender":"male","Mobile Number":"9599245905","address":"a7/27-a phase 5 aya nagar, new delhi"},
    {"id":"1002","Name":"Pranjal Gupta","UID":"654039758262","Father Name":"Rajesh Gupta","Date of birth":"02/20/2001","gender":"Female","mobile no":"1234567898","address":"b5/35 rohini ,new delhi"},
    {"id":"1003","Name":"Mahak Chaudhary","UID":"654039758263","Father Name":"Ramesh Chaudhary","Date of birth":"03/07/2001","gender":"female","mobile no":"9876543212","address":"i12 rajnagar,up"},
    {"id":"1004","Name":"Mudit Sharma","UID":"654039758264","Father Name":"Somesh Sharma","Date of birth":"06/22/2001","gender":"male","mobile no":"9876543213","address":"a9/27-a phase 6 aya nagar, new delhi"},
    {"id":"1005","Name":"Ankit Verma","UID":"654039758265","Father Name":"Rohit Verma","Date of birth":"08/05/2001","gender":"male","mobile no":"9876543214","address":"b7/35 rohini ,new delhi"},
    {"id":"1006","Name":"Daksh Dudeja","UID":"654039758266","Father Name":"Rahul Dudeja","Date of birth":"09/03/2001","gender":"male","mobile no":"9876543215","address":"i212 rajnagar,up"}
    ]


async function addAadhar(){

console.log("vhgh")

try{
    demo_data.map((each)=>{

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
catch(err){
    console.log(err)
}


}


module.exports = addAadhar