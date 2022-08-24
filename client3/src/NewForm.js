import React from 'react'
import './NewForm.css'

function NewForm(){
  return (
    <>
        <div className='form-container'>
            <header>Information Form</header>
            <form action='#'>
                <div className='form'>
                    <div className='details personal'>
                        <span className='title'>Personal Details</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Enter your name' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Date of Birth</label>
                                <input type='date' placeholder='Enter birth date' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Mobile Number</label>
                                <input type='text' placeholder='Enter mobile number' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Father's Name</label>
                                <input type='text' placeholder="Enter your father's name" required></input>
                            </div>
                            <div className='input-field'>
                                <label>Gender</label>
                                <input type='text' placeholder='Enter your gender' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Age</label>
                                <input type='number' placeholder='Enter your age' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Image</label>
                                <input type="file" placeholder='File upload ka input kaam ni kar rha' required></input>
                            </div>
                        </div>
                    </div>
                    <div className='details ID'>
                        <span className='title'>Aadhar Details</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <label>Aadhar Number</label>
                                <input type='number' placeholder='Enter your aadhar number' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Residential Address (Line 1)</label>
                                <input type='text' placeholder='House No. / Street / Block No.' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Residential Address (Line 2)</label>
                                <input type='text' placeholder='Area / Locality' required></input>
                            </div>
                            <div className='input-field'>
                                <label>City</label>
                                <input type='text' placeholder='Enter city' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Pincode</label>
                                <input type='number' placeholder="Enter your address pincode" required></input>
                            </div>
                            <div className='input-field'>
                                <label>Nationality</label>
                                <input type='text' placeholder='Enter your Nationality' required></input>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='submit-information'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default NewForm