import * as api from '../api';

export const addMobilePayment = (mobileData) => async (dispatch) => {
    try{
        const { data } = await api.addMobilePayment(mobileData);
        //Get the return value. (Paylaod data = return value from the API.)
        dispatch({type: 'CREATE', payload: data });
    } catch (error){
        console.log(error);
    }
    //Get return value.
}