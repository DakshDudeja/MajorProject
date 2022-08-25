import React from 'react'
import Navbar from './Navbar';
import NewForm from './NewForm';
import SearchOption from './SearchOption';

function Home(props){
  return (
    <div>
        <Navbar />
        {/* <NewForm /> */}
        <SearchOption setMetric={props.setMetric}/>
    </div>
  )
}

export default Home;