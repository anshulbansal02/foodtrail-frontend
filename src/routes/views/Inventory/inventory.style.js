import styled from "styled-components";

export const InventoryWrapper=styled.div`
// background-color:C4C4C4;
max-width:80%;
margin:0px auto;
.searchdiv{
    width:200px;
    margin-left:auto;
    position:relative;
    .icon{
        position:absolute;
        left:10px;
        top:50%;
        transform:translateY(-50%);
        color:#ccc;
        
    }


}


`
export const InputSearch=styled.input`
display:block;
outline:none;
background-color:#fff;
border-radius:20px;
border:none;
box-shadow:2px 3px 10px #ccc;
width:100%;
padding:10px 15px;
padding-left:35px;
font-size:1rem;
color:#797878;
`