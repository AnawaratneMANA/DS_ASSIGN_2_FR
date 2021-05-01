import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

const Payment = props =>(
    <tr>
        <td>{props.details._id}</td>
        <td>{props.details.userId}</td>
        <td>{props.details.CreditCardNumber}</td>
        <td>{props.details.CreditCardUser}</td>
        <td>{props.details.Amount}</td>
        <td>{props.details.CVC_Number}</td>
        {/* <td>
            <Link to={"/EditStudent/"+props.details._id}>edit</Link> | <a href="/DisplayStudent" onClick={() => {
            props.deleteStudent(props.student._id)}}>delete</a>
        </td> */}
    </tr>
)

export class PaymentComponent5 extends Component {

    constructor(props) {
        super(props);
        //this.deleteStudent = this.deleteStudent.bind(this);
        this.state = {details: []};

    }
    componentDidMount() {
        axios.get("http://localhost:8073/displayCreditCardDetails/").then(response => {
            this.setState({details: response.data});
        }).catch((err) => {
            console.log(err);
        })
    }

    // deleteStudent(id) {
    //     console.log("i:" +id);
    //     document.write("i:" +id)
    //     axios.delete('http://localhost:8070/student/delete/'+id)
    //         .then(res => console.log(res.data));
    //     this.setState({
    //         student: this.state.student.filter(el => el._id !== id)
    //     })
    // }

    paymentList(){
        return this.state.details.map(currentdetails => {
            return <Payment payment = {currentdetails} deleteDetails = {this.deleteDetails} key ={currentdetails._id}/>;
        })
    }
    render() {
        return (
            <div>
                <div>
                <h3>Credit Card Table</h3>
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
