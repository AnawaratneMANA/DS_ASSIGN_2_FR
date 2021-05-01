import React from 'react'
import "./PaymentStyle.css";
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addMobilePayment} from '../../actions/mobile';

function PaymentComponent2() {
    const dispatch = useDispatch();
    const [mobileData, setmobileData] = useState(
        {
            userId : "F125",
            Phone_Number : " ",
            Amount : 0,
            Pin_Number : 0
        }
    )

    const submit = (e) => {
        e.preventDefault();
        console.log(mobileData);
        //method to be added
        dispatch(addMobilePayment(mobileData));
    }

    return (
        <div className="PaymentComponent2">
            <div className="elements">
                <h1>Mobile Phone - Customer Service</h1>
                <Form className="form" onSubmit = {submit}>
                    <Form.Group controlId="mobilePhone" className="formelements">
                        <Form.Label>Mobile Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter the mobile Phone Number" 
                        value = {mobileData.Phone_Number}
                        onChange={(e) => setmobileData({...mobileData, Phone_Number: e.target.value})}/>
                    </Form.Group>

                    <Form.Group controlId="PinNum" className="formelements">
                        <Form.Label>Credit Card Owner</Form.Label>
                        <Form.Control type="text" placeholder="Enter the PIN number" 
                        value = {mobileData.Pin_Number}
                        onChange={(e) => setmobileData({...mobileData, Pin_Number: e.target.value})}/>
                    </Form.Group>
                    <Form.Group controlId="Amount " className="formelements">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" placeholder="Amount" 
                        value = {mobileData.Amount}
                        onChange={(e) => setmobileData({...mobileData, Amount: e.target.value})}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="formelements">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default PaymentComponent2
