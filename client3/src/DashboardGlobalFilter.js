import React, { useEffect } from 'react'
import './DashboardGlobalFilter.css'
import axios from "axios"
export const DashboardGlobalFilter = ({filter, setFilter}) => {


async function Change(value){
 const res = await axios.get("http://localhost:5000/search",{value:value})
}



  return (
    <>
        <span className='searchInDashboard'>
            Search : {''}
            <input 
                value={filter || ''} 
                onChange={e => setFilter(e.target.value)
                } type='text'> 
            </input>
        </span>
        <span className='noResult'></span>
    </>
  )
}
