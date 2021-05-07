import React from 'react';
import PaymentComponent1 from "./PaymentComponent1";
import PaymentComponent2 from "./PaymentComponent2";
import PaymentComponent3 from "./PaymentComponent3";
import PaymentComponent6 from "./PaymentComponent6";
import PaymentComponent5 from "./PaymentComponent5";
import "./PaymentStyle.css";
function Payment() {
    return (<React.Fragment>
            <div className="Payment">
                <div className="container">
                    <div className="row">
                        <PaymentComponent1/>
                        <PaymentComponent2/>
                    </div>
                    <div className="row">
                        <PaymentComponent5/>
                    </div>
                    <div className="row">
                        <PaymentComponent6/>
                    </div>
                </div>
            
        </div>
    </React.Fragment>)
}
export default Payment;
