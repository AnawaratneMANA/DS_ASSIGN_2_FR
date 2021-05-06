import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';
import {Button} from "react-bootstrap";

const Payment = props =>(
    <tr>
        <td>{props.displayCreditCardDetails.id}</td>
        <td>{props.displayCreditCardDetails.userId}</td>
        <td>{props.displayCreditCardDetails.creditCardNumber}</td>
        <td>{props.displayCreditCardDetails.creditCardUser}</td>
        <td>{props.displayCreditCardDetails.amount}</td>
        <td>{props.displayCreditCardDetails.cvc_Number}</td>
        {/*<td><Button size="sm" variant="primary" onClick={(props.displayCreditCardDetails.id)}>Edit</Button></td>*/}
        {/*<td>*/}
        {/*    <Link >edit</Link> | <a href="/DisplayStudent" onClick={() => {*/}
        {/*    props.deleteStudent(props.student._id)}}>delete</a>*/}
        {/*</td> */}
    </tr>
)


export class PaymentComponent5 extends Component {

    constructor(props) {
        super(props);
        //this.deleteStudent = this.deleteStudent.bind(this);
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
    onEdit(id){
        axios.put('http://localhost:8073/updateCreditCardDetailsById/'+id)
                .then(res => console.Login(res.data));
            this.setState({
                student: this.state.student.filter(el => el._id !== id)
            })
    }
//     axios.post('http://localhost:8070/student/update/'+this.props.match.params.id, newStudent)
//     .then(() => {
//     alert("Student updated");
//     window.location = '/DisplayStudent';
// }).catch((err) => {
//     console.log(err);
// })
    // deleteStudent(id) {
    //     console.Login("i:" +id);
    //     document.write("i:" +id)
    //     axios.delete('http://localhost:8070/student/delete/'+id)
    //         .then(res => console.Login(res.data));
    //     this.setState({
    //         student: this.state.student.filter(el => el._id !== id)
    //     })
    // }
//
    paymentList(){
        return this.state.displayCreditCardDetails.map(currentdetails => {
            return <Payment displayCreditCardDetails = {currentdetails} deleteDetails = {this.deleteDetails} key ={currentdetails._id}/>;
        })
    }
    render() {
        return (
            <div className="PaymentComponent5">
                    <h1>Credit Card Table</h1>
                    <div className= "inside">
                            <table className="table">
                                <thead className= "thead-light">
                                <tr>
                                    <th scope="col">id</th>
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
