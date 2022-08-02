import React, {useState} from 'react';
import {Row} from 'react-bootstrap'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import alertify from 'alertifyjs';

export default function AddInvoice() {

  const [invoice_id, setInvoiceId] = useState('');

  function refreshPage(e){
    e.preventDefault()
    window.location.reload();
  }

  const handleClick=(e)=>{
    e.preventDefault()
    const payments ={invoice_id}
    // console.log(Invoice)

    if(invoice_id.length<1){
      alertify.error("Value can not be null!")
    }else{
      fetch("http://localhost:8080/v1/payments/pay/"+invoice_id,{
              method:"POST",
              headers:{'Content-Type': 'application/json', 'charset': 'utf-8'},
              body:JSON.stringify(payments)
          })
          .then(response=>{
            (response.ok) ? alertify.success("Invoice added!") : alertify.error("Invoice did not paid!") ;
            refreshPage(e);
          })
          .catch((error) => {
            return Promise.reject()
          });
    }
  }

    return (
        <div className="card mt-1 p-1">
              
                <div className="card-title mt-1"><h5 className="text-muted"><DescriptionIcon sx={{ color: 'action.active', mr: 0.5 }} style={{marginBottom:"5px"}} />Pay Dept </h5><hr/></div>
                <div className="card-body">

                <form autoComplete="off">
                <Box sx={{ display: 'flex', alignItems: 'flex-end' , justifyContent:'center' }} className="mx-auto">
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" name="invoice_id" label="Invoice ID" variant="standard" 
                value={invoice_id}
                onChange={(e)=>setInvoiceId(e.target.value)}
                />

              </Box>
              <Row>
                 <button className="btn btn-primary mt-3" onClick={handleClick}>Pay</button>
              </Row>
              </form>
              </div>
            </div>
    )
  }
