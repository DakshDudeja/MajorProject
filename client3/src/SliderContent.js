import React from 'react'

function SliderContent({activeIndex, SliderData}){
  return (
    <section>
        {SliderData.map((slide,index) => (
            <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                <img className='slide-image' src={slide.url} alt="SlideShow Image"></img>
            </div> 
        ))}
        <div></div>
    </section>
  )
}

export default SliderContent