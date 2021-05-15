import axios from 'axios'
const url = "http://localhost:8073/";


//Create API Calling method 
export const createUser = (user) =>  axios.post(url + "user", user);
export const validateUser = (user) => axios.post(url + "validate", user);
//Current this not in use.
export const getUserId = (user) => axios.post(url + "getValdatedUserId", user)

//Item API Calling Methods.
export const getItems = () => axios.get(url + "displayitem");
export const createItem = (item) =>  axios.post(url + "item", item);
export const updateItem = (item) => axios.put();





//Add Credit Card Payment
export const addCreditCardPayment = (creditCardData) =>  axios.post(url + "addCreditCardDetails/", creditCardData);
//Update Credit Card Payment 
export const updateCreditCardPayment = (creditCardData) =>  axios.post(url + "addCreditCardDetails", creditCardData);//this is wrong
//Add Mobile Payment
export const addMobilePayment = (mobileData) =>  axios.post(url + "addPhoneDetails", mobileData);

