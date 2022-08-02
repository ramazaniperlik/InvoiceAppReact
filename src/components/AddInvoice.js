import React, {useState} from 'react';
import {Row} from 'react-bootstrap'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import DescriptionIcon from '@mui/icons-material/Description';
import alertify from 'alertifyjs';

export default function AddInvoice() {

  const [user_id, setUserId] = useState('');
  const [invoiceAmount, setAmount] = useState('');

  function refreshPage(e){
    e.preventDefault()
    window.location.reload();
  }

  const handleClick=(e)=>{
    e.preventDefault()
    const Invoice ={user_id,invoiceAmount}
    // console.log(Invoice)

    if(user_id.length<1 || invoiceAmount.length<1){
      alertify.error("Values can not be null!")
    }else{
      fetch("http://localhost:8080/v1/invoices/createInvoice/"+user_id,{
              method:"POST",
              headers:{'Content-Type': 'application/json', 'charset': 'utf-8'},
              body:JSON.stringify(Invoice)
          })
          .then(response=>{
            (response.ok) ? alertify.success("Invoice added!") : alertify.error("Invoice did not added!") ;
            refreshPage(e);

          })
          .catch((error) => {
            return Promise.reject()
          });
    }
  }

    return (
        <div className="card mt-1 p-1">
              
                <div className="card-title mt-1"><h5 className="text-muted"><DescriptionIcon sx={{ color: 'action.active', mr: 0.5 }} style={{marginBottom:"5px"}} />Add Invoice </h5><hr/></div>
                <b className="mx-auto">{(`User ID : ${user_id} - Amount : ${invoiceAmount+' TL'}`)}</b>
                <div className="card-body">

                <form autoComplete="off">
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent:'center' }} className="mx-5">
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" name="userId" label="User ID" variant="standard" 
                value={user_id}
                onChange={(e)=>setUserId(e.target.value)}
                />

                <CurrencyLiraIcon sx={{ color: 'action.active', mr: 0.5, my: 0.5 }} style={{marginLeft:"25px"}} />
                <TextField id="input-with-sx" name="amount" label="Amount" variant="standard" 
                value={invoiceAmount}
                onChange={(e)=>setAmount(e.target.value)}
                />
              </Box>
              <Row>
                 <button className="btn btn-primary mt-3" onClick={handleClick}>Save</button>
              </Row>
              </form>
              </div>
            </div>
    )
  }
