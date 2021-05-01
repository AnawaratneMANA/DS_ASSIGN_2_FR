import * as api from '../api';

export const addCreditCardPayment = (creditCardData) => async (dispatch) => {
    try{
        const { data } = await api.addCreditCardPayment(creditCardData);
        //Get the return value. (Paylaod data = return value from the API.)
        dispatch({type: 'CREATE', payload: data });
    } catch (error){
        console.log(error);
    }
    //Get return value.
}

export const updateCreditCardPayment = (creditCardData) => async (dispatch) => {
    try{
        const { data } = await api.updateCreditCardPayment(creditCardData);
        //Get the return value. (Paylaod data = return value from the API.)
        dispatch({type: 'CREATE', payload: data });
    } catch (error){
        console.log(error);
    }
    //Get return value.
}