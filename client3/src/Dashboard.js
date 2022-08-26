import React,{ useEffect, useMemo, useState} from 'react'
import { useNavigate } from 'react-router-dom';

import {useTable, useSortBy, useGlobalFilter, usePagination} from 'react-table'
import { DashboardColumn } from './DashboardColumn'
import DATA from './Dashboarddata.json'
import './Dashboard.css'
import { DashboardGlobalFilter } from './DashboardGlobalFilter'
import axios from "axios"
import Navbar from './Navbar'
import Loading from './img/loading.gif'
function Dashboard(){
    const navigate = useNavigate();
    const [d1,setd1] = useState([])
    const columns = useMemo(() => DashboardColumn,[])
    const data = useMemo(() => [...d1],[d1])
    const [info,setinfo] = useState()
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id:'view',
                Header:'View Details',
                Cell : ({row}) => (

                    
                    <button className='view-details' onClick={() => navigate(`/information/${row.cells[3].value}`)}>
                        View
                    </button>
                )
            }
        ])
    }

useEffect(()=>{

async function retrieve(){
    const result = await axios.get("http://localhost:5000/info/all")
    console.log(result)
    if(result){
    setd1(result.data.data)
    }
}

retrieve()


},[])


    const {
        getTableProps,
        getTableBodyProps,
        page,
        headerGroups,
        prepareRow,
        state,
        nextPage,
        previousPage,
        gotoPage,
        canNextPage,
        canPreviousPage,
        pageCount,
        setGlobalFilter
    } = useTable({
        columns,
        data,
        initialState: { pageSize: 15 }
    },
    tableHooks,
    useGlobalFilter,
    useSortBy,
    usePagination
    )

    const {globalFilter, pageIndex, pageSize} = state

  return (
    <>
    <Navbar />
        <DashboardGlobalFilter 
            filter={globalFilter} 
            setFilter={setGlobalFilter} 
        />
        
       { d1.length!== 0 ?<table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) =>(
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {
                            headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {
                                        column.render('Header')
                                    }
                                </th>
                            ))
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                    //    console.log(row)
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>{
                                row.cells.map((cell) => {
                                
                                    return <td {...cell.getCellProps()}>{
                                        
                                        cell.render('Cell')
                                    }</td>
                                })
                            }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>:<img className='loading-roll' src={Loading}></img>}
        <div className='footerDashboard'>
            <div className='pageChange'>
                <button className='initialPage' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className='movePage' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button className='movePage' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button className='lastPage' onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
            <div className='pageNumber'>
                <span>
                    Page{' '}
                    <strong>{pageIndex+1} of { pageCount }</strong>{' '}
                </span>
            </div>
        </div>
    </>
  )
}

export default Dashboard