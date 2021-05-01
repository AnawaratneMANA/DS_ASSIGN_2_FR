import { combineReducers } from 'redux';
import user from './user';
import items from './items';
import creditcardpayments from './creditcardpayments';
import mobilepayments from './mobilepayments';
//Import Payment
export default combineReducers ({
    user, items, creditcardpayments, mobilepayments
});
