export default (mobilepayments = [], action) => {
    switch (action.type){
        case 'CREATE':
            return [...mobilepayments, action.payload]; //payload equals return data from API.
        default:
            return mobilepayments;
    }
}