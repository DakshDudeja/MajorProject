import React from 'react'
import './Information.css'

function Information(){
  return (
    <>
    <div className='information-container'>
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
        </div>
    </>
  )
}

export default Information