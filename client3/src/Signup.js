import React, { useEffect, useState } from "react";
import "./Signup.css";
import shape from "./img/shape.png"

function SignUp(){

    const [userInfo, setUserInfo]=useState({
        email: "",
        password: "",
    })

    function change(event,para){
        setUserInfo((previousValue)=>{
            return{
                ...previousValue,
                [para]:event.target.value
            }
        })
    }
    
    const [isError, setIsError]=useState("");

    const checkValidation = (event) => {
        if(userInfo.password != event.target.value){
            setIsError("Password didn't match")
        }else{
            setIsError("")
        }
        if(event.target.value ==""){
            setIsError("")
        }
    }


    return(
        // <div className="signupPage">
        //     <div className="signupContainer">
        //         <h1>SignUp</h1>
        //         <div>
        //             <label className="email">Email</label>
        //             <br/>
        //             <input className="input"
        //                 id="email" 
        //                 v-model="email" 
        //                 text="email" 
        //                 placeholder="Your email address" 
        //                 value={userInfo.email} 
        //                 onChange={(event)=>{change(event,"email")}}
        //                 >
        //             </input>
        //         </div>
        //         <div>
        //             <label className="password">Password</label>
        //             <br/>
        //             <input className="input"
        //                 id="password"
        //                 v-model="password" 
        //                 type="password" 
        //                 placeholder="Your Password" 
        //                 value={userInfo.password} 
        //                 onChange={(event)=>{change(event,"password")}}
        //                 >
        //             </input>
        //         </div>
        //         <div>
        //             <label className="verifypassword">
        //                 Confirm Password
        //             </label>
        //             <br/>
        //             <input className="input"
        //                 id="verifyPassword" 
        //                 v-model="password" 
        //                 type="password" 
        //                 placeholder="Confirm Your Password"
        //                 onChange={(event)=>{checkValidation(event)}}
        //              >
        //             </input>
        //             <div className="verifyPass">
        //                 {isError}
        //             </div>
        //         </div>
                
        //         <div className="signUp">
        //             <a href="/home">
        //             <button className="signupBtn">
        //                 SignUp
        //             </button>
        //             </a>
        //             <p>Already have an account? <a href="/">LogIn</a></p>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='contact-container'>
            <span className='big-circle'></span>
            <img src={shape} className='square'></img>
            <div className='form'>
                <div className='contact-info'>
                    <h3 className='title'>SignUp</h3>
                    <p className='text'>Platform for helping authorised officials in identification of individual rescued from human trafficking.</p>
                    <div className='info'>
                        <div className='information'>
                            
                            <p>MAIT, Rohini, Sector-22, Delhi-110086</p>
                        </div>
                        <div className='information'>
                            <p>mait123@mait.ac.in</p>
                        </div>
                        <div className='information'>
                            <p>+91-99995-99995</p>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <span className='circle one'></span>
                    <span className='circle two'></span>

                    <form action='index.html'>
                        <h3 className='contact-title'>Sign Up</h3>
                        <div className='input-container'>
                            <input value={userInfo.email} onChange={(event)=>{change(event,"email")}} id="email" v-model="email" type='text' placeholder="Enter your email id" className='contact-input'></input>
                            <span>Email</span>
                        </div>
                        <div className='input-container'>
                            <input type='text'placeholder="Enter username" className='contact-input'></input>
                            <span>Username</span>
                        </div>
                        <div className='input-container'>
                            <input type='tel' name='phone' className='contact-input'></input>
                            <label htmlFor=''>Phone</label>
                            <span>Phone</span>
                        </div>
                        <div className='input-container textarea'>
                            <textarea name='message' className='contact-input'></textarea>
                            <label htmlFor=''>Message</label>
                            <span>Message</span>
                        </div>
                        <input type='submit' value='Send' className='form-submit-btn'></input>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}


export default SignUp