import React, {useState} from 'react'
import "./PaymentStyle.css";
import {useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import { addCreditCardPayment } from "../../actions/creditcard";
import {Container, Paper} from '@material-ui/core';
import axios from "axios";


function PaymentComponent1({total}) {
    const dispatch = useDispatch();
    const user = localStorage.getItem('userid');
    const email = localStorage.getItem('email');
    console.log(user);
    console.log(total);
    const [creditCardData, setCreditCardData] = useState(
        {
            userId : user,
            creditCardNumber : " ",
            creditCardUser : " ",
            cvc_Number : 0,
            amount : total
        }
    )

    const submit = (e) => {
        e.preventDefault();
        console.log(creditCardData);
        //method to be added
        alert(`payment successful`);
        const templateId = 'template_7my6c7z';
        const serviceID = 'service_5zkxkh9';
        sendFeedback(serviceID, templateId, { from_name: "team WE19", message: "Payment is done successfully", to_name: email })

        dispatch(addCreditCardPayment(creditCardData));

    }
    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            alert(`Email sent sucessfully`);
            window.location = '/Payment';
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))

    }
    return (
        
        <div className="PaymentComponent5">
                <h2 className="H1">Credit Card Payment</h2>
                <br/>
                <Form className="form" onSubmit = {submit}>
                    <div className= "inside1">
                        <Form.Group controlId="formBasicEmail" className="formelements">
                            <Form.Label>Credit Card Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter the credit card number"
                             value = {creditCardData.creditCardNumber}
                            onChange={(e) => setCreditCardData({...creditCardData, creditCardNumber: e.target.value})}/>
                        </Form.Group>

                        <Form.Group controlId="CardOwnerName" className="formelements">
                            <Form.Label>Credit Card Owner</Form.Label>
                            <Form.Control type="text" placeholder="Enter the credit card owner"
                             value = {creditCardData.creditCardUser}
                             onChange={(e) => setCreditCardData({...creditCardData, creditCardUser: e.target.value})}/>
                        </Form.Group>
                        <Form.Group controlId="CVCNumber" className="formelements">
                            <Form.Label>CVC Number</Form.Label>
                            <Form.Control type="Number" placeholder="Enter the CVC number"
                            value = {creditCardData.cvc_Number}
                            onChange={(e) => {
                                if (e.target.value.length > 3){
                                    console.log(e.target.value.length);
                                    e.preventDefault();

                                }else {
                                    setCreditCardData({...creditCardData, cvc_Number: e.target.value})
                                }

                            }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="formelements">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="Number" placeholder="Amount"
                                          value = {creditCardData.amount}
                                          onChange={(e) => setCreditCardData({...creditCardData, amount: e.target.value})}/>
                        </Form.Group>
                        <Form.Group controlId="Amount " className="formelements">
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form.Group>
                    </div>
                </Form>

        </div>
    )
}

export default PaymentComponent1;
