//Import the method from API
import * as api from '../api';
export const getItems = () => async (dispatch) => {
    try{
        const { data } = await api.getItems();
        //Get the return value. (Paylaod data = return value from the API.)
        dispatch({type: 'FETCH', payload: data });
    } catch (error){
        console.log(error);
    }
    //Get return value.
}