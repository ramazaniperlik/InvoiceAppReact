import React, { Component } from 'react'
import axios from 'axios';
import ReceiptIcon from '@mui/icons-material/Receipt';

export default class GetInvoices extends Component {

    state = { invoices:[] }
    
  componentDidMount(){
      axios.get('http://localhost:8080/v1/invoices/getInvoices')
      .then(response => {
          const invoices = response.data;
          this.setState({ invoices });
      })
  }

  render() {
    return (
      <div>
        <div className="container">
                    <div className="row">
                    <div className="card mt-1 p-2">
                    <div className="card-title mx-1 mt-1"><h5 className="text-muted"><ReceiptIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} style={{marginBottom:"5px"}}/>Invoice List</h5><hr/></div>
         
                         <table class="text-center mt-1">
                           <thead>
                             <th>ID</th>
                             <th>Date</th>
                             <th>Invoice Amount</th>
                             <th>Statu</th>
                             <th>User ID</th>
                           </thead>
                           {
                            this.state.invoices
                            .map(invoice =>
                                 <tr>
                                   <td>{invoice.id}</td>
                                   <td>{invoice.date} </td>
                                   <td>{invoice.invoiceAmount}</td>
                                   <td>{invoice.statu}</td>
                                   <td>{invoice.user.id}</td> 
                                 </tr>
                     )
            } </table>
    </div>
</div>
</div>
</div>
    )
  }
}
