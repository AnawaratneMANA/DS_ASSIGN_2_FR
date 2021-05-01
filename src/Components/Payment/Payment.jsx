import React from 'react';
import PaymentComponent1 from "./PaymentComponent1";
import "./PaymentStyle.css";
function Payment() {
    return (<React.Fragment>
            <div className="Payment">
            <div className="container">
                <div className="row">
                    <PaymentComponent1/>
                    <PaymentComponent1/>
                </div>
            </div>
            
        </div>
    </React.Fragment>)
}
export default Payment;
