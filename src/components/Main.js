import {Container,Row} from 'react-bootstrap'
import React from 'react';
import AddInvoice from './AddInvoice';
import AddUser from './AddUser';
import AddPayment from './AddPayment';
import GetUsers from './GetUsers';
import GetPayments from './GetPayments';
import GetInvoices from './GetInvoices';

export default function Main(){

    return (
     <div>
        <Container>
          <Row>
            <div className="col-md-8">
             <GetUsers/><GetPayments/><GetInvoices/>
              </div>
            <div className="col-md-4">
              <AddInvoice/>
              <AddUser/>
              <AddPayment/>
           </div>
          </Row>
        </Container>
    </div>
  )
  }
