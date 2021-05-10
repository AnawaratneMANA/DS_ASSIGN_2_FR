import React, {useState} from 'react'
import "./PaymentStyle.css";
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addMobilePayment} from '../../actions/mobile';

function PaymentComponent2() {
    const dispatch = useDispatch();
    const [mobileData, setmobileData] = useState(
        {
            userId : "F125",
            phone_Number : " ",
            amount : " ",
            pin_Number : 0
        }
    )

    const submit = (e) => {
        e.preventDefault();
        console.log(mobileData);
        //method to be added
        dispatch(addMobilePayment(mobileData));
        window.location = '/Payment';
    }

    return (
        <div className="PaymentComponent5">
                <h1 className="H1">Mobile Phone Service</h1>
                <div className= "inside">
                    <Form className="form" onSubmit = {submit}>
                            <Form.Group controlId="mobilePhone" className="formelements">
                                <Form.Label>Mobile Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter the mobile Phone Number"
                                value = {mobileData.phone_Number}
                                onChange={(e) => setmobileData({...mobileData, phone_Number: e.target.value})}/>
                            </Form.Group>

                            <Form.Group controlId="PinNum" className="formelements">
                                <Form.Label>Pin Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter the PIN number"
                                value = {mobileData.pin_Number}
                                onChange={(e) => setmobileData({...mobileData, pin_Number: e.target.value})}/>
                            </Form.Group>
                            <Form.Group controlId="PinNum" className="formelements">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" placeholder="Amount"
                                              value = {mobileData.amount}
                                              onChange={(e) => setmobileData({...mobileData, amount: e.target.value})}/>
                            </Form.Group>
                        <Form.Group controlId="Amount " className="formelements">
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form.Group>
                        <Form.Group type="text" className="formelements">

                        </Form.Group>
                    </Form>
                </div>
            </div>
    )
}

export default PaymentComponent2
