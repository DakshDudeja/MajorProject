import React from 'react'
import Navbar from './Navbar';
import NewForm from './NewForm';
import SearchOption from './SearchOption';
import Slider from './Slider';

function Home(props){
  return (
    <div>
        <Navbar />
        {/* <Slider /> */}
        {/* <NewForm /> */}
        <SearchOption setMetric={props.setMetric}/>
    </div>
  )
}

export default Home;