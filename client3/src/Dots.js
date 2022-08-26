import React from 'react'

function Dots({activeIndex, onclick, SliderData}){
  return (
    <div className='all-dots'>
        {SliderData.map((slide, index) =><span key={index} className={`${activeIndex === index ? "dot active-dot" : "dot"}`} onClick={() => onclick(index)}></span>)}
    </div>
  )
}

export default Dots