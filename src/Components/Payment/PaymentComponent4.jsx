import React, { Component, useState } from 'react'
import "./PaymentStyle.css";
import {Form, Button} from 'react-bootstrap';
import axios from "axios";

export class PaymentComponent4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            phone_Number : " ",
            amount : " ",
            pin_Number : 0
        }
        this.submit = this.submit.bind(this);
        //did a testing
        this.editPhone_Number = this.editPhone_Number.bind(this);
        this.editPinNumber = this.editPinNumber.bind(this);
        this.editAmount = this.editAmount.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:8073/getSinglePhoneDetail/"+this.state.id)
            .then(response => {
                let values = response.data;
                this.setState({phone_Number: values.phone_Number,
                    amount : values.amount,
                    pin_Number : values.pin_Number,
                });

            });
    }
    editPhone_Number= (event) => {
        this.setState({phone_Number: event.target.value});
    }
    editPinNumber= (event) => {
        this.setState({pin_Number: event.target.value});
    }
    editAmount= (event) => {
        this.setState({amount: event.target.value});
    }
    submit = (e) => {
        e.preventDefault();
        let payment = {id: this.state.id,
            phone_Number : this.state.phone_Number,
            pin_Number : this.state.pin_Number,
            amount : this.state.amount
        };
        console.log(payment);
        axios.put('http://localhost:8073/updatePhoneDetailsById/'+this.props.match.params.id, payment).then(() => {
            alert("payment updated");
            window.location = '/payment';
        }).catch((err) => {
            console.log(err);
        })
    }


    render() {
        return (
            <div className="PaymentComponent3">
                <h1 className="H1">Update Mobile Payment Payment</h1>
                <div className= "inside">
                    <Form className="form" onSubmit = {this.submit}>

                        <Form.Group controlId="formBasicEmail" className="formelements">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Phone Number"
                                          value = {this.state.phone_Number}
                                          onChange={this.editPhone_Number}/>
                        </Form.Group>

                        <Form.Group controlId="CVCNumber" className="formelements">
                            <Form.Label>CVC Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter the PIN Number"
                                          value = {this.state.pin_Number}
                                          onChange={this.editPinNumber}/>
                        </Form.Group>

                        <Form.Group controlId="CVCNumber" className="formelements">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Amount"
                                          value = {this.state.amount}
                                          onChange={this.editAmount}/>
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

export default PaymentComponent4
