import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';
import {Container} from "@material-ui/core";
import {Button} from "react-bootstrap";

const Payment = props =>(
    <tr>
        <td>{props.displayCreditCardDetails.userId}</td>
        <td>{props.displayCreditCardDetails.creditCardNumber}</td>
        <td>{props.displayCreditCardDetails.creditCardUser}</td>
        <td>{props.displayCreditCardDetails.amount}</td>
        <td>{props.displayCreditCardDetails.cvc_Number}</td>
        <td>
            <Button to={"/payment/update-payment1/"+props.displayCreditCardDetails.id}>edit</Button> |
            <Button onClick={() => {
                                    props.deleteValues(props.displayCreditCardDetails.id)
            }}>delete</Button>
        </td>
    </tr>
)

export class PaymentComponent5 extends Component {

    constructor(props) {
        super(props);
        this.deleteValues = this.deleteValues.bind(this);
        this.state = {displayCreditCardDetails: []};
    }
    componentDidMount() {
        axios.get("http://localhost:8073/displayCreditCardDetails")
            .then(response => {
            console.log("error going 3");
                 this.setState({displayCreditCardDetails: response.data})
                console.log("error going 5");
        }).catch((err) => {
            console.log("error going 1");
        })
    }

    deleteValues(id) {
        console.log(id);
        axios.delete('http://localhost:8073/deleteCreditCardDetail/'+id)
            .then(res => console.log(res.data));
        this.setState({
            displayCreditCardDetails: this.state.displayCreditCardDetails.filter(el => el.id !== id)
        })
    }
//
    paymentList(){
        return this.state.displayCreditCardDetails.map(currentdetails => {
            return <Payment displayCreditCardDetails = {currentdetails} deleteValues = {this.deleteValues} key ={currentdetails.id}/>;
        })
    }
    render() {
        return (
            <div className="PaymentComponent5">
                    <h2 className="H1">Credit Card Table</h2>
                    <div className= "inside">

                            <table className="table">
                                <thead className= "thead-light">
                                <tr>
                                    <th scope="col">userID</th>
                                    <th scope="col">CreditCardNumber</th>
                                    <th scope="col">CreditCardUser</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">CVC_Number</th>

                                </tr>
                                </thead>
                                <tbody>
                                    {this.paymentList()}
                                </tbody>
                            </table>
                    </div>
            </div>
        )
    }
}

export default PaymentComponent5
