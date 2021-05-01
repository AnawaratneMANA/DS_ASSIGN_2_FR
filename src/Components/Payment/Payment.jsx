import React from 'react';
import PaymentComponent1 from "./PaymentComponent1";
import PaymentComponent2 from "./PaymentComponent2";
import "./PaymentStyle.css";
function Payment() {
    return (<React.Fragment>
            <div className="Payment">
            <div className="container">
                <div className="row">
                    <PaymentComponent1/>
                    <PaymentComponent2/>
                </div>
            </div>
            
        </div>
    </React.Fragment>)
}
export default Payment;
