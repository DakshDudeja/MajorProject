import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchOption.css'
import axios from "axios"
function SearchOption(props){

  const navigate = useNavigate();

  const [aadhar,setaadhar] = useState("")
  async function biometricSearch(event){

    const formdata = new FormData()
    formdata.append("file",event.target.files[0])

    const res = await axios.post("http://localhost:5000/biometric",formdata)
    if(res){
      console.log(res)
      props.setMetric(res.data.data);
      navigate("/new-form")
    }
  }


console.log(props)
  async function searchbyno(){
    const res = await axios.post("http://localhost:5000/aadhar",{id:aadhar})
    if(res){
      console.log(res)
      props.setMetric(res.data.data);
      navigate("/new-form")
    }
  }

  return (
    // <div className='SearchOption'>
    //     <p className='search'>Search For Person</p>
    //     <div>
    //         <div className='searchBoxes'>
    //           <input onChange={(event)=>biometricSearch(event)} type="file" id='file' />
    //           <label>By Biometrics</label>
    //         </div>
    //         <div className='searchBoxes'>
    //           <input type="file" id='file'></input>
    //           <label>By Image</label>
    //         </div>
    //         <div className='searchBoxes'>
    //           <input type="file" id='file'></input>
    //           <label>By UID Number</label>
    //         </div>
    //     </div>
    // </div>
      <>
    <div className='search-card-header'>
      <h3>Search Details</h3>
    </div>
      <div className='card-container'>
        <div className='card'>
          <div className='card-image'>
            <img src='https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2021/03/aadhar-vector.png' alt=''></img>
          </div>
          <div className='card-content'>
            <div className='card-title'>
              <h3>Using Aadhar Number</h3>
            </div>
            <div className='card-info'>
              <p>To search person using his/her Aadhar details enter the 12 digit unique aadhar number. After entering the number, click on the submit button.</p>
            </div>
            <div className='card-file-btn'>
              <input onChange={(event)=>setaadhar(event.target.value)} type='number' placeholder='Enter aadhar number'></input>
            </div>
              <button className='card-submit-btn' onClick={searchbyno}>Search</button>
            
          </div>
        </div>
        <div className='card'>
          <div className='card-image'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjbDIemvGRhKKv5_iU26ZuJAAaKbsO-x_aQ&usqp=CAU' alt='fingerprint image'></img>
          </div>
          <div className='card-content'>
            <div className='card-title'>
              <h3>By Biometrics</h3>
            </div>
            <div className='card-info'>
              <p>To search person using his/her biometrics upload biometric image in jpeg format. Then click on the submit button.</p>
            </div>
            <div className='card-file-btn'>
              <input onChange={(event)=>biometricSearch(event)} type='file'></input>
            </div>
              <button className='card-submit-btn'>Search</button>
            
          </div>
        </div>
        <div className='card'>
          <div className='card-image'>
            <img src='https://img.freepik.com/premium-vector/face-recognition-great-design-any-purposes-protection-icon-vector-personal-protection_123447-1348.jpg?w=2000' alt=''></img>
          </div>
          <div className='card-content'>
            <div className='card-title'>
              <h3>By Photo</h3>
            </div>
            <div className='card-info'>
              <p>If you have the photo of the person upload the image file in jpeg format and click on the Search button.</p>
            </div>
            <div className='card-file-btn'>
              <input type='file'></input>
            </div>
  
              <button className='card-submit-btn'>Search</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchOption;