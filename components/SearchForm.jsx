import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


export const SearchForm= ()=>{
const [formValues,setFormValues]= useState({
    search:""
})

const handleSignUp = async()=>{
    console.log("form submitted")
  }
    return(
    <Container>
    <div className="form">
            <input type="password" placeholder='password' name='password' value={formValues.search} onChange={(e)=>setFormValues({
              ...formValues,[e.target.name]:e.target.value,
            })}/>
            <button onClick={handleSignUp}>Search</button>
    </div >
    </Container>
)
}


const Container =styled.div`
    .form{  
      display:grid;
      width:65%;
      grid-template-columns:${"2fr 1fr"};
      input{
        color:black;
        border:none;
        padding:1.5rem;
        font-size:1.2rem;
        border:1px solid black;
        &:focus{
          outline:none;
        }
        
      }
        button{
          padding:0.5rem 1rem;
          background-color:#e50914;
          border: none;

          cursor:pointer;
          color:white;
          font-weight:bolder;
          font-size: 1.05rem;
        
      }
    }

`