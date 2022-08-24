import React, {useState, useEffect} from 'react'
import './Login.css'

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  return (
    <div className="loginPage">
        <div className="loginContainer">
            <h1>Login</h1>
            <div>
                <label className="email">Email</label>
                <br/>
                <input className="input" id="email" v-model="email" type="email" placeholder="Your email address" onChange = {(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label className="password">Password</label>
                <br/>
                <input className="input" id="password" v-model="password" type="password" placeholder="Your Password" onChange = {(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="forgetPassword">
            <a href="#">Forget Password?</a>
            </div>
            <div className="login">
                <a href="/home">
                    <button className="loginBtn" >
                        Login
                    </button>
                </a>
            </div>
            <div className="signUp">
                <a href="/signup">
                <button className="signupBtn">
                    New User? Register
                </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Login