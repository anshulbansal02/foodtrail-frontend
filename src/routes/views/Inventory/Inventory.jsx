import React from 'react';
import TableComponent from '../../../components/Table/Table';
import { InventoryWrapper } from './inventory.style';
import { InputSearch } from './inventory.style'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const header=[
    {

        id:"sno",
        align:"left",
        label:"S.NO.",
        backgroundColor:"transparent",
        color:"#969696",
        fontSize:"13px",
        borderBottom:"none"
        
    },{
        id:"name",
        align:"left",
        label:"Name",
        backgroundColor:"transparent",
        color:"#969696",
        fontSize:"13px",
        borderBottom:"none"
        
    },{

        id:"quantity",
        align:"left",
        label:"Quantity",
        backgroundColor:"transparent",
        color:"#969696",
        fontSize:"13px",
        borderBottom:"none"
        
    },
    {

        id:"price",
        align:"left",
        label:"Price",
        backgroundColor:"transparent",
        color:"#969696",
        fontSize:"13px",
        borderBottom:"none"
        
    }
    
]
const data=[
    {
        sno:"1",
        name:"product 1",
        quantity:"3 kg",
        price:"1000"


    },
    {
        sno:"1",
        name:"product 1",
        quantity:"3 kg",
        price:"1000"


    },
    {
        sno:"1",
        name:"product 1",
        quantity:"3 kg",
        price:"1000"


    },

]

function Inventory() {
  return (
    <InventoryWrapper>
        <div className="searchdiv">
            <InputSearch name="search" placeholder="Search..."/>
            <SearchOutlinedIcon className="icon"/>
        </div>
        <TableComponent tabHeader={header} tabContent={data}/>
    </InventoryWrapper>
  )
}

export default Inventory