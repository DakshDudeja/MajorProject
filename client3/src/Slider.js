import React, { useState } from 'react'
import SliderContent from './SliderContent'
import SliderData from './SliderData';
import Slideshow from './Slideshow'
import Dots from './Dots';
import './Slideshow.css'

const len=SliderData.length - 1;

function Slider(props){
    const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} SliderData={SliderData}/>
        <Slideshow 
            prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
        />
        <Dots activeIndex={activeIndex} SliderData={SliderData} onclick={(activeIndex) => setActiveIndex(activeIndex)}/>
    </div>
  )
}

export default Slider