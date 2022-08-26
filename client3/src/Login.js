import React, {useState, useEffect} from 'react'
import './Login.css'
// import './ContactUs.css'
import shape from "./img/shape.png"

import Upload from './uploadImages'
import axios from 'axios'

function Login(){


    

    const [photo,setphoto] = useState("")
    const [address,setaddress] = useState("")
    const [purpose,setpurpose] = useState("")
    const [name,setname] = useState("anonymous")
    const [pincode,setpincode] = useState("")
    

    const [status,setstatus] = useState("image")
    function focusElemnt(event){
        event.target.classList.add('focus');
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    


    async function upload(event){

        const formdata = new FormData()
        formdata.append("file",event.target.files[0])
        // Upload(event.target.files[0].name,event.target.files[0],setphoto)
        
        
    }




function save(){
    const r1 = axios.post("http://localhost:5000/forum",{photo:photo,address:address+pincode,purpose:purpose,name:name, pincode:pincode})
    if(r1){
        setstatus("anonymous")
        setstatus("image")
    }
    
}




  return (
    // <div className="loginPage">
    //     <div className="loginContainer">
    //         <h1>Login</h1>
    //         <div>
    //             <label className="email">Email</label>
    //             <br/>
    //             <input className="input" id="email" v-model="email" type="email" placeholder="Your email address" onChange = {(e) => setEmail(e.target.value)}></input>
    //         </div>
    //         <div>
    //             <label className="password">Password</label>
    //             <br/>
    //             <input className="input" id="password" v-model="password" type="password" placeholder="Your Password" onChange = {(e) => setPassword(e.target.value)}></input>
    //         </div>
    //         <div className="forgetPassword">
    //         <a href="#">Forget Password?</a>
    //         </div>
    //         <div className="login">
    //             <a href="/home">
    //                 <button className="loginBtn" >
    //                     Login
    //                 </button>
    //             </a>
    //         </div>
    //         <div className="signUp">
    //             <a href="/signup">
    //             <button className="signupBtn">
    //                 New User? Register
    //             </button>
    //             </a>
    //         </div>
    //     </div>
    // </div>
    <>
        <div className='contact-container'>
            <span className='big-circle'></span>
            <img src={shape} className='square'></img>
            <div className='form'>
                <div className='contact-info'>
                    <h3 className='title'>Anonymous! Report Crime</h3>
                    <p className='text'>Come forward and help us by reporting suspicious activities happening around you without disclosing your identity.</p>
                   {status === "image" ? <div className='info'>
                        <div className='information information-box-up'>   

                            <label className='information-box-upload'>Choose File<input onChange={(event)=>upload(event)} type="file"></input></label>
                        </div>
                        <div className='information information-dropdown'>
                            <select onChange={(event)=>{setpurpose(event.target.value)
                            
                            }}>
                                <option value="Reporting Missing Person" >Report Found Person</option>
                                <option value="Report Suspicious Activity" >Report Human Trafficking</option>
                            </select>
                        </div>
                        <div className='information'>
                            <button onClick={(event)=>setstatus("name")} className='input'>Next</button>
                        </div>
                    </div>
                    :status === "name" ? <div className='info'>
                        <div className='information'>
                            <input className='contact-input' onChange={(event)=>{setname(event.target.value)
                            
                            }} type="text" placeholder='Enter your name'></input>
                        </div>
                        <div className='information information-or'>
                            <p>OR</p>
                        </div>
                        <div className='information information-or'>
                            <p className='anonymous-info'>Proceed as Anonymous</p>
                        </div>
                        <div className='information information-back-btn'>
                            <button onClick={(event)=>setstatus("address")} className='input'>Next</button>
                        </div>
                        <div className='information information-back-btn'>
                            <button onClick={(event)=>setstatus("image")} className='input'>Back</button>
                        </div>
                    </div>
                    :<div className='info'>
                        <div className='information'>
                            <input onChange={((event)=>setaddress(event.target.value))} className='contact-input' type="text" placeholder='Enter current address'></input>
                        </div>
                        <div className='information information-or'>
                            <input onChange={((event)=>setpincode(event.target.value))} className='contact-input' type="number" placeholder='Enter pincode'></input>
                        </div>
                        {/* <div className='information information-or'>
                        <input className='contact-input' type="text" placeholder='Enter city'></input>
                        </div> */}
                        <div className='information'>
                            <button onClick={save} className='input'>Submit</button>
                        </div>
                        <div className='information information-back-btn'>
                            <button onClick={(event)=>setstatus("name")} className='input'>Back</button>
                        </div>
                    </div>}
                </div>
                <div className='contact-form'>
                    <span className='circle one'></span>
                    <span className='circle two'></span>

                    <form action='index.html'>
                        <h3 className='contact-title'>Login</h3>
                        <div className='input-container'>
                            <input onChange = {(e) => setPassword(e.target.value)} type='text' placeholder='Enter username' className='contact-input'></input>
                            {/* <label htmlFor=''>Username</label> */}
                            <span>Username</span>
                        </div>
                        <div className='input-container'>
                            <input onChange = {(e) => setPassword(e.target.value)} type='password' placeholder='Enter password' className='contact-input'></input>
                            {/* <label htmlFor=''>Phone</label> */}
                            <span>Password</span>
                        </div>
                        {/* <input type='submit' value='Send' className='form-submit-btn'></input> */}
                        <div className="forgetPassword">
                         <a href="#">Forget Password?</a>
                         </div>
                         <a href="/home"  ><div className="login-form-btn">
                         LogIn
                        </div></a>
                        <a href="/signup"><div className="login-form-btn">   
                     New User? Register
                 </div></a>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login