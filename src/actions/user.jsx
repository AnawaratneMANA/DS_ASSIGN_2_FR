//Import the method from API
import * as api from '../api';
export const createUser = (user) => async (dispatch) => {
    try{
        const { data } = await api.createUser(user);
        //Get the return value. (Paylaod data = return value from the API.)
        dispatch({type: 'CREATE', payload: data });
    } catch (error){
        console.log(error);
    }
    //Get return value.
}