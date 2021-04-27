//Define other CRUD for Users.
export default (user = [], action ) => {
    switch (action.type){
        case 'CREATE':
            return [...user, action.payload]; //payload equals return data from API.
        default:
            return user;
    }
}