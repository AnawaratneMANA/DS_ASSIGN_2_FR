//Import the method from API
import * as api from './api';
export const createUser = () => async (dispatch) => {
    try{
        //Calling the API.
        const { user } = await api.createUser(user);
        //Get the return value. (Paylaod data = return value from the API.)
        dispatch({type: 'CREATE' , payload: user });
    } catch (error){
        console.log(error);
    }
    //Get return value.
}