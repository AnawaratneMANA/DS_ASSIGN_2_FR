//Import the method from API
import * as api from '../api';
export const createUser = (user) => async (dispatch) => {
    try{
        const { data } = await api.createUser(user);
        //Get the return value. (Payload data = return value from the API.)
        dispatch({type: 'CREATE', payload: data });
    } catch (error){
        console.log(error);
    }
}

export const loginUserValidation = (user) => async () => {
    try {
        //Call a different method to validate users.
        const data = await api.validateUser(user);
        return data;
        //Get the return value. (Payload data = return value from the API.
    } catch (error) {
        console.log(error);
    }
}
