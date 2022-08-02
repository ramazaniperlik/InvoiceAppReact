import React, { useState } from 'react';
import {Row} from 'react-bootstrap'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import alertify from 'alertifyjs';

export default function AddUser(){
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function refreshPage(e){
      e.preventDefault()
      window.location.reload();
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const User ={firstName,lastName}
        // console.log(User)

    if(firstName.length<1 || lastName.length<1){
    alertify.error("Values can not be null!")
    }else{
      fetch("http://localhost:8080/v1/users/createUser",{
                method:"POST",
                headers:{'Content-Type': 'application/json', 'charset': 'utf-8'},
                body:JSON.stringify(User)
              }).then(response=>{
                (response.status===200) ? alertify.success("User added!") : alertify.error("User not Error adding user!") ;
                refreshPage(e);
            })
    }  
    }


    return (
        <div className="card mt-1 p-1">
                <div className="card-title mt-1"><h5 className="text-muted"> <SwitchAccountIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />Add User </h5><hr/></div>
                <div className="card-body">

              <form autoComplete="off">
              <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent:'center'}} className="mx-5">
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" name="firstName" label="First Name" variant="standard" 
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                />

                <AccountCircle sx={{ color: 'action.active', mr: 0.5, my: 0.5 }} style={{marginLeft:"25px"}}/>
                <TextField id="input-with-sx" name="lastName" label="Last Name" variant="standard" 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}/>
              </Box>
              <Row>
                 <button className="btn btn-primary mt-3" onClick={handleClick}>Save</button>
              </Row>
              </form>
              </div>
            </div>
    )
  }
