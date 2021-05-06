import React, { Component, useState } from 'react'
import "./PaymentStyle.css";
import {useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import { addCreditCardPayment } from "../../actions/creditcard";
import axios from "axios";

export class PaymentComponent3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            userId : " ",
            creditCardNumber : " ",
            creditCardUser : " ",
            cvc_Number : 0,
            amount : 0

        }
        this.submit = this.submit.bind(this);
        this.editCreditCardNumber = this.editCreditCardNumber.bind(this);
        this.editCreditCardUser = this.editCreditCardUser.bind(this);
        this.editCVCNumber = this.editCVCNumber.bind(this);
        this.editAmount = this.editAmount.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:8073/getSingleCreditCardDetail/"+this.state.id)
            .then(response => {
                let values = response.data;
                this.setState({creditCardNumber: values.creditCardNumber,
                    creditCardUser : values.creditCardUser,
                    cvc_Number : values.cvc_Number,
                    amount : values.amount
                });

            });
    }
    editCreditCardNumber= (event) => {
        this.setState({creditCardNumber: event.target.value});
    }
    editCreditCardUser= (event) => {
        this.setState({creditCardUser: event.target.value});
    }
    editCVCNumber= (event) => {
        this.setState({cvc_Number: event.target.value});
    }
    editAmount= (event) => {
        this.setState({amount: event.target.value});
    }

    submit = (e) => {
        e.preventDefault();
        let payment = {id: this.state.id,
            userId : this.state.userId,
            creditCardNumber : this.state.creditCardNumber,
            creditCardUser : this.state.creditCardUser,
            cvc_Number : this.state.cvc_Number,
            amount : this.state.amount
            };
        console.log(payment);
        axios.put('http://localhost:8073/updateCreditCardDetailsById/'+this.props.match.params.id, payment).then(() => {
            alert("payment updated");
            window.location = '/payment';
        }).catch((err) => {
            console.log(err);
        })
    }


    render() {
        return (
            <div className="PaymentComponent3">
                <h1>Update Credit Card Payment</h1>
                <div className= "inside">
                    <Form className="form" onSubmit = {this.submit}>

                        <Form.Group controlId="formBasicEmail" className="formelements">
                            <Form.Label>Credit Card Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter the credit card number"
                                          value = {this.state.creditCardNumber}
                                          onChange={this.editCreditCardNumber}/>
                        </Form.Group>

                        <Form.Group controlId="CardOwnerName" className="formelements">
                            <Form.Label>Credit Card Owner</Form.Label>
                            <Form.Control type="text" placeholder="Enter the credit card owner"
                                          value = {this.state.creditCardUser}
                                          onChange={this.editCreditCardUser}/>
                        </Form.Group>
                        <Form.Group controlId="CVCNumber" className="formelements">
                            <Form.Label>CVC Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter the CVC number"
                                          value = {this.state.cvc_Number}
                                          onChange={this.editCVCNumber}/>
                        </Form.Group>

                        <Form.Group controlId="Amount" className="formelements">
                            <Form.Label>Credit Card Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter payment"
                                          value = {this.state.amount}
                                          onChange={this.state.editAmount}/>
                        </Form.Group>

                        <Form.Group controlId="submit" className="formelements">
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default PaymentComponent3
