import React from 'react';
import PaymentComponent1 from "./PaymentComponent1";
import PaymentComponent2 from "./PaymentComponent2";
import PaymentComponent3 from "./PaymentComponent3";
import PaymentComponent6 from "./PaymentComponent6";
import PaymentComponent5 from "./PaymentComponent5";
import "./PaymentStyle.css";
function Payment({cartTotal}) {
    return (<React.Fragment>

            <div className="Payment">

                <div className="container">
                    <center>
                    <div className="row">
                        <center>
                        <h1>User Full Payment : {cartTotal}</h1>
                        </center>
                    </div>
                    <div className="row">
                        <h1>Credit Card Interface</h1>
                        <PaymentComponent1/>
                        <PaymentComponent5/>
                    </div>
                    <div className="row">
                        <h1>Phone Detail Interface</h1>
                        <PaymentComponent2/>
                        <PaymentComponent6/>
                    </div>
                    </center>
                </div>
            
        </div>
    </React.Fragment>)
}
export default Payment;
