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

//add item
export const createItem = (item) => async (dispatch) => {
    try{
        const { data } = await api.createItem(item);
        //Get the return value. (Paylaod data = return value from the API.)
        dispatch({type: 'CREATE', payload: data });
    } catch (error){
        console.log(error);
    }
    //Get return value.
}

//update item
// export const updateItem = async(req, res) => {
//     const {id: _id} = req.params;

//     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No item with that id');

//     const updatedItem = 
  
  
// }