import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';
import {Button} from "react-bootstrap";
import {Container} from "@material-ui/core";


const Payment = props =>(
    <tr>
        <td>{props.displayPhoneDetails.userId}</td>
        <td>{props.displayPhoneDetails.phone_Number}</td>
        <td>{props.displayPhoneDetails.pin_Number}</td>
        <td>{props.displayPhoneDetails.amount}</td>
        <td>
            <Link to={"/payment/update-payment2/"+props.displayPhoneDetails.id}>
            <Button>edit</Button> </Link> |
            <Button onClick={() => {
                props.deleteValues(props.displayPhoneDetails.id)
            }}>delete</Button>

        </td>
    </tr>
)


export class PaymentComponent6 extends Component {

    constructor(props) {
        super(props);
        this.deleteValues = this.deleteValues.bind(this);
        this.state = {displayPhoneDetails: []};
    }
    componentDidMount() {
        axios.get("http://localhost:8073/displayPhoneDetails")
            .then(response => {
                this.setState({displayPhoneDetails: response.data})
            }).catch((err) => {
            console.log("error going 1");
        })
    }

    deleteValues(id) {
        console.log(id);
        axios.delete('http://localhost:8073/deletePhoneDetail/'+id)
            .then(res => console.log(res.data));
        this.setState({
            displayPhoneDetails: this.state.displayPhoneDetails.filter(el => el.id !== id)
        })
    }
//
    paymentList(){
        return this.state.displayPhoneDetails.map(currentdetails => {
            return <Payment displayPhoneDetails = {currentdetails} deleteValues = {this.deleteValues} key ={currentdetails.id}/>;
        })
    }
    render() {
        return (
            <div className="PaymentComponent5">
                <h2 className="H1">Phone Card Table</h2>
                <div className= "inside">
                    <table className="table">
                        <thead className= "thead-light">
                        <tr>
                            <th scope="col">userID</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Pin Number</th>
                            <th scope="col">Amount</th>
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

export default PaymentComponent6
