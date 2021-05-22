import React, {useState} from 'react'
import "./PaymentStyle.css";
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addMobilePayment} from '../../actions/mobile';

function PaymentComponent2() {
    const dispatch = useDispatch();
    const user = localStorage.getItem('userid');
    const email = localStorage.getItem('email');
    const [mobileData, setmobileData] = useState(
        {
            userId : user,
            phone_Number : " ",
            amount : " ",
            pin_Number : 0
        }
    )

    const submit = (e) => {
        e.preventDefault();
        console.log(mobileData);

        dispatch(addMobilePayment(mobileData));
        alert(`payment successful`);
        const templateId = 'template_7my6c7z';
        const serviceID = 'service_5zkxkh9';
        sendFeedback(serviceID, templateId, { from_name: "team WE19", message: "payment is successful", to_name: email })


    }
    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            alert(`Email sent sucessfully`);
            window.location = '/Payment';
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }
    return (
        <div className="PaymentComponent5">
                <h2 className="H1">Mobile Phone Service</h2><br/>
                    <Form className="form" onSubmit = {submit}>
                        <div className= "inside1">
                                <Form.Group controlId="mobilePhone" className="formelements">
                                    <Form.Label>Mobile Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the mobile Phone Number"
                                    value = {mobileData.phone_Number}
                                    onChange={(e) => {

                                        setmobileData({...mobileData, phone_Number: e.target.value})
                                    }}/>
                                </Form.Group>

                                <Form.Group controlId="PinNum" className="formelements">
                                    <Form.Label>Pin Number</Form.Label>
                                    <Form.Control type="Number" placeholder="Enter the PIN number"

                                    value = {mobileData.pin_Number}

                                    onChange={(e) =>
                                    {

                                        if (e.target.value.length > 4){
                                            console.log(e.target.value.length);
                                            e.preventDefault();

                                        }else {
                                            setmobileData({...mobileData, pin_Number: e.target.value})
                                        }

                                    }}/>
                                </Form.Group>
                                <Form.Group controlId="PinNum" className="formelements">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type="Number" placeholder="Amount"
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
                        </div>
                    </Form>

            </div>
    )
}

export default PaymentComponent2
