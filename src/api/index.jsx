import axios from 'axios'
const url = "http://localhost:8073/";


//Create API Calling method 
export const createUser = (user) =>  axios.post(url + "user", user);

//Item API Calling Methods.
export const getItems = () => axios.get(url + "item");
export const createItem = (item) =>  axios.post(url + "item", item);




//Add Credit Card Payment 
export const addCreditCardPayment = (creditCardData) =>  axios.post(url + "addCreditCardDetails", creditCardData);

//Add Mobile Payment
export const addMobilePayment = (creditCardData) =>  axios.post(url + "addPhoneDetails", creditCardData);

