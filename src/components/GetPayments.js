import React, { Component } from 'react'
import axios from 'axios';
import PaymentIcon from '@mui/icons-material/Payment';

export default class GetPayments extends Component {

    state = { payments:[] }
    
  componentDidMount(){
      axios.get('http://localhost:8080/v1/payments/getAllDepts')
      .then(response => {
          const payments = response.data;
          this.setState({ payments });
      })
  }

  render() {
    return (
      <div>
        <div className="container">
                    <div className="row">
                    <div className="card mt-1 p-1">
                    <div className="card-title mx-1 mt-1"><h5 className="text-muted"><PaymentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} style={{marginBottom:"5px"}}/>Payment List</h5><hr/></div>
            
                        <table class="text-center mt-1">
                          <thead>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Total Amount</th>
                            <th>User ID</th>
                          </thead>
                          {
                this.state.payments
                .map(payment =>
                                <tr>
                                  <td>{payment.id}</td>
                                  <td>{payment.date} </td>
                                  <td>{payment.totalAmount}</td>
                                  <td>{payment.user.id}</td> 
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
