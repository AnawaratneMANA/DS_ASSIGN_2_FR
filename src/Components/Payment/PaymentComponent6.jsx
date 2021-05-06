import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

const Payment = props =>(
    <tr>
        <td>{props.displayPhoneDetails.id}</td>
        <td>{props.displayPhoneDetails.userId}</td>
        <td>{props.displayPhoneDetails.phone_Number}</td>
        <td>{props.displayPhoneDetails.pin_Number}</td>
        <td>{props.displayPhoneDetails.amounts}</td>
        {/* <td>
            <Link to={"/EditStudent/"+props.details._id}>edit</Link> | <a href="/DisplayStudent" onClick={() => {
            props.deleteStudent(props.student._id)}}>delete</a>
        </td> */}
    </tr>
)


export class PaymentComponent6 extends Component {

    constructor(props) {
        super(props);
        //this.deleteStudent = this.deleteStudent.bind(this);
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
        return this.state.displayPhoneDetails.map(currentdetails => {
            return <Payment displayPhoneDetails = {currentdetails} deleteDetails = {this.deleteDetails} key ={currentdetails._id}/>;
        })
    }
    render() {
        return (
            <div className="PaymentComponent5">
                <h1>Phone Card Table</h1>
                <div className= "inside">
                    <table className="table">
                        <thead className= "thead-light">
                        <tr>
                            <th scope="col">id</th>
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
