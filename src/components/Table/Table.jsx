import React from 'react';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material';
import {TablePage} from './Table.style';

function TableComponent(props) {
    const {tabHeader,tabContent,handleOnClick}=props;
    
    return (
        <TablePage >
            <TableContainer >
           
           <Table >
                    <TableHead  >
                        <TableRow>
                            {
                                
                                    tabHeader.map((column)=>(
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth:column.minWidth,backgroundColor:column.backgroundColor,color:column.color,fontSize:column.fontSize,borderBottom:column.borderBottom}}

                                        >
                                            {column.label}

                                        </TableCell>
                                    ))
                                
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tabContent.map((row)=>{
                            return(
                                   <TableRow className="row" style={{cursor:"pointer"}} onClick={(e)=>handleOnClick(row)} tabIndex={-1}>
                                       {tabHeader.map((column)=>{
                                           const value=row[column.id];
                                           return(
                                               <TableCell style={{fontSize:"1.3rem"}}>
                                                   {
                                                       value
                                                   }
                                               </TableCell>
                                           )
                                       })
                                           
                                       }
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer> 

        </TablePage>
    )
} 

TableComponent.defaultProps={
    tabHeader:[],
    tabContent:[],
    handleOnClick:()=>{}
}
export default TableComponent