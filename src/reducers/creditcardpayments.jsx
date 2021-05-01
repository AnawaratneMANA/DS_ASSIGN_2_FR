export default (creditcardpayments = [], action) => {
    switch (action.type){
        case 'CREATE':
            return [...creditcardpayments, action.payload]; //payload equals return data from API.
        default:
            return creditcardpayments;
    }
}