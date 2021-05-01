import React, {useState} from 'react'
import "./PaymentStyle.css";
import {useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';

function PaymentComponent1() {

    const [creditCardData, setCreditCardData] = useState(
        {
            userId : "F125",
            CreditCardNumber : " ",
            CreditCardUser : " ",
            Amount : 0,
            CVC_Number : 0
        }
    )

    const submit = (e) => {
        e.preventDefault();
        console.log(creditCardData);
        //method to be added
        dispatch(addCreditCardPayment(creditCardData));
    }
    return (
        <div className="PaymentComponent1">
            <div className="elements">
                <h1>Credit Card Payment</h1>
                <Form className="form" onSubmit = {submit}>
                    <Form.Group controlId="CardNumber" className="formelements">
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter the credit card number" 
                        value = {creditCardData.CreditCardNumber}
                        onChange={(e) => setCreditCardData({...creditCardData, CreditCardNumber: e.target.value})}/>
                    </Form.Group>

                    <Form.Group controlId="CardOwnerName" className="formelements">
                        <Form.Label>Credit Card Owner</Form.Label>
                        <Form.Control type="text" placeholder="Enter the credit card owner"
                         value = {creditCardData.CreditCardUser}
                         onChange={(e) => setCreditCardData({...creditCardData, CreditCardUser: e.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="CVCNumber" className="formelements">
                        <Form.Label>CVC Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter the CVC number" 
                        value = {creditCardData.CVC_Number}
                        onChange={(e) => setCreditCardData({...creditCardData, CVC_Number: e.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="Amount " className="formelements">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" placeholder="Amount" 
                        value = {creditCardData.Amount}
                        onChange={(e) => setCreditCardData({...creditCardData, Amount: e.target.value})}/>
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
