export default (items = [], action) => {
    switch (action.type){
        case 'FETCH':
            return action.payload; //payload equals return data from API.
        default:
            return items;
    }
}
