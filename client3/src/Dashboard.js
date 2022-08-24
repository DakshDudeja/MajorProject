import React,{ useEffect, useMemo, useState} from 'react'
import {useTable, useSortBy, useGlobalFilter, usePagination} from 'react-table'
import { DashboardColumn } from './DashboardColumn'
import DATA from './Dashboarddata.json'
import './Dashboard.css'
import { DashboardGlobalFilter } from './DashboardGlobalFilter'
import axios from "axios"
import Navbar from './Navbar'
function Dashboard(){

    const columns = useMemo(() => DashboardColumn,[])
    const data = useMemo(() => DATA,[])
    const [info,setinfo] = useState()
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id:'view',
                Header:'View Details',
                Cell : ({row}) => (
                    <button className='view-details' onClick={() => alert("Hello")}>
                        View
                    </button>
                )
            }
        ])
    }

// useEffect( async ()=>{

// const result = await axios.get("http:localhost:5000/info/all")

// if(result){
// setinfo(result.data)
// }

// },[])


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
        
        <table {...getTableProps()}>
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
        </table>
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