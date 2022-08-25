import React from 'react'
import './Information.css'

function Information(){
  return (
    <>
    {/* <div className='information-container'>
        <div className='Information-box'>
          <h2 className='info-title'>Person Details</h2>
          <form>
            <div className="container">
              <div className='info-image'>
                <img src="https://st.depositphotos.com/1010683/1389/i/600/depositphotos_13895290-stock-photo-giant-panda-bear-eating-bamboo.jpg" alt="User Image"></img>
              </div>
              <div className='info-details'>
                  <h4><b>Name : </b><span>Mudit Sharma</span></h4>
                  <h4><b>UID No. : </b> <span>1234 1234 1234</span></h4>
                  <h4><b>Age : </b> <span>22</span></h4>
                  <h4><b>Guardian Name : </b> <span>Mudit Sharma</span></h4>
              </div>
            </div>
          </form>
        </div>
        <div className='info-description-box'>
              <label>Description of Report</label>
              <br></br>
              <textarea className='info-description' name="textReport" rows={3} cols={20}></textarea>
        </div>
        </div> */}
        <div className='form-container'>
            <header>Information Form</header>
            <form action='#'>
                <div className='form'>
                <div className='details personal'>
                        <span className='title'>Personal Details</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <img className='missing-person-image' src="#" alt="missing person image"></img>
                            </div>
                        </div>
                    </div>
                    <div className='details personal'>
                        <span className='title'>Personal Details</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Enter your name'  required></input>
                            </div>
                            <div className='input-field'>
                                <label>Date of Birth</label>
                                <input type='text' placeholder='Enter birth date' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Mobile Number</label>
                                <input type='text' placeholder='Enter mobile number'required></input>
                            </div>
                            <div className='input-field'>
                                <label>Father's Name</label>
                                <input type='text' placeholder="Enter your father's name"required></input>
                            </div>
                            <div className='input-field'>
                                <label>Gender</label>
                                <input type='text' placeholder='Enter your gender'  required></input>
                            </div>
                            <div className='input-field'>
                                {/* <label>Age</label>
                                <input type='text' placeholder='Enter your age' value={props.metric.age} required></input> */}
                            </div>
                            <div className='input-field'>
                                <label>Uploar Latest Image</label>
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
                                {/* <label>Residential Address (Line 2)</label>
                                <input type='text' placeholder='Area / Locality' required></input> */}
                            </div>
                            <div className='input-field'>
                            <textarea placeholder='Description of report' className='contact-input'></textarea>
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

export default Information