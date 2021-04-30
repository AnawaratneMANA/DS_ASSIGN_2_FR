import React from 'react'
import "./PaymentStyle.css";
import {Form, Button} from 'react-bootstrap';

function PaymentComponent1() {
    return (
        <div className="PaymentComponent1">
            <div className="elements">
                <h1>Credit Card Payment</h1>
                <Form className="form">
                    <Form.Group controlId="CardNumber" className="formelements">
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter the credit card number" />
                    </Form.Group>

                    <Form.Group controlId="CardOwnerName" className="formelements">
                        <Form.Label>Credit Card Owner</Form.Label>
                        <Form.Control type="text" placeholder="Enter the credit card owner" />
                    </Form.Group>
                    <Form.Group controlId="CVCNumber" className="formelements">
                        <Form.Label>CVC Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter the CVC number" />
                    </Form.Group>
                    <Form.Group controlId="Amount " className="formelements">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" placeholder="Amount" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="formelements">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default PaymentComponent1
