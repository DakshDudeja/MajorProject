import React from 'react'
import Navbar from './Navbar';
import NewForm from './NewForm';
import SearchOption from './SearchOption';

function Home(){
  return (
    <div>
        <Navbar />
        {/* <NewForm /> */}
        <SearchOption />
    </div>
  )
}

export default Home;