import React,{ useEffect, useMemo, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useTable, useSortBy, useGlobalFilter, usePagination} from 'react-table'
import { NotificationColumn } from './NotificationColumn'
import DATA from './NotificationData.json'
import './Dashboard.css'
import { DashboardGlobalFilter } from './DashboardGlobalFilter'
import axios from "axios"
import Navbar from './Navbar'
function Notification(){
    const navigate = useNavigate();
    const [d1,setd1] = useState([])
    const columns = useMemo(() => NotificationColumn,[])
    const data = useMemo(() => [...d1],[d1])
    // const dataColumn = useMemo(
    //     () => d1[0]
    //         ? Object.keys(d1[0])
    //         .map((key) => {
    //             if(key === "photo")
    //                 return{
    //                     Header:key,
    //                     accessor:key,
    //                     Cell: ({ value }) =><img src={value}></img>,
    //                     maxWidth:60,
    //                 }
    //                 return { Header:key, accessor:key};
    //         })
    //         : [],
    //         [d1]
    // );
    // const tableInstance = useTable({
    //     columns:dataColumn,
    //     data:data,
    // })
    const [info,setinfo] = useState()
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            // {
            //     id:'photo',
            //     Header:'Photo',
            //     Cell : ({row}) => (

                    
            //         // <button className='view-details' onClick={() => navigate(`/information/${row.cells[3].value}`)}>
            //         //     View
            //         // </button>
            //         <img src={tableProps.row.original.id} alt="report image"></img>
                    
            //     )
            // },
            {
                id:'accept',
                Header:'Accept Report',
                Cell : ({row}) => (

                    
                    // <button className='view-details' onClick={() => navigate(`/information/${row.cells[3].value}`)}>
                    //     View
                    // </button>
                    <select>
                        <option>Accept</option>
                        <option>Reject</option>
                    </select>
                    
                )
            }
        ])
    }

useEffect(()=>{

async function retrieve(){
    const result = await axios.get("http://localhost:5000/forum/all")
    console.log(result)
    if(result){
    setd1(result.data.data)
    }
}

retrieve()


},[])


    const {
        tableProps,
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
                                    console.log(row.cells[4].column)
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

export default Notification