import React, { Component, useState } from 'react'
import "./PaymentStyle.css";
import {useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import axios from "axios";



export class PaymentComponent3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            creditCardNumber : " ",
            creditCardUser : " ",
            amount : " ",
            cvc_Number : 0,


        }
        this.submit = this.submit.bind(this);
        this.editAmounts = this.editAmounts.bind(this);
        this.editCreditCardNumber = this.editCreditCardNumber.bind(this);
        this.editCreditCardUser = this.editCreditCardUser.bind(this);
        this.editCVCNumber = this.editCVCNumber.bind(this);

    }
    componentDidMount(){
        axios.get("http://localhost:8073/getSingleCreditCardDetail/"+this.state.id)
            .then(response => {
                let values = response.data;
                this.setState({creditCardNumber: values.creditCardNumber,
                    creditCardUser : values.creditCardUser,
                    amount : values.amount,
                    cvc_Number : values.cvc_Number,

                });

            });
    }
    editCreditCardNumber= (event) => {
        this.setState({creditCardNumber: event.target.value});
    }
    editCreditCardUser= (event) => {
        this.setState({creditCardUser: event.target.value});
    }
    editAmounts= (event) => {
        this.setState({amount: event.target.value});
    }
    editCVCNumber= (event) => {
        this.setState({cvc_Number: event.target.value});
    }


    submit = (e) => {
        e.preventDefault();
        let payment = {id: this.state.id,
            creditCardNumber : this.state.creditCardNumber,
            creditCardUser : this.state.creditCardUser,
            amount : this.state.amount,
            cvc_Number : this.state.cvc_Number

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
                <h2 className="H1">Update Credit Card Payment</h2>
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

                        <Form.Group controlId="formBasicEmail" className="formelements">
                            <Form.Label>Credit Card Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter the credit card number"
                                          value = {this.state.amount}
                                          onChange={this.editAmounts}/>
                        </Form.Group>

                        <Form.Group controlId="CVCNumber" className="formelements">
                            <Form.Label>CVC Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter the CVC number"
                                          value = {this.state.cvc_Number}
                                          onChange={this.editCVCNumber}/>
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
