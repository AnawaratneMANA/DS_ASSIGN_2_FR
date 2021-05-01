import React, {useState, useEffects} from 'react';
import {createItem} from '../../actions/item';
import {useDispatch, useSelector} from 'react-redux';
import './style.css'
function AddItems() {

    const dispatch = useDispatch();
    var flag = 'FALSE';
    const [itemData, setItemData] = useState(
        {
            title: '',
            price: '',
            description: '',
            image:''
        }
    );

    const clear = () =>{
        //Clear the Form.
    }

    //Submit Details 
    const handleSubmit = (e) => {
        //Stop page from loading.
        e.preventDefault();
        //submit data
        dispatch(createItem(itemData));
      
        clear(); 
    }



    return (<React.Fragment>
         <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1 className="mb-5">Add Item</h1>
                <div className="form-group">
                    <label for="name">Title</label>
                    <input id="name" type="text" className="form-control" name="name" placeholder="Enter title" value={itemData.title}
                    onChange={(e) => setItemData({...itemData, title: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" className="form-control" name="price" placeholder="Enter price" value={itemData.price}
                    onChange={(e) => setItemData({...itemData, price: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input id="description" type="text" className="form-control" name="description" placeholder="Enter description" value={itemData.description}
                    onChange={(e) => setItemData({...itemData, description: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label for="img">Item image</label>
                    <input type="file" className="form-control-file" id="img" value={itemData.image} onChange={(e) => setItemData({...itemData, image: e.target.value})}/>
                </div>

                <br />

                <div className="text-right">
                    <button type = 'submit' className="btn btn-primary">Add</button>
                </div>
            </form>
            </div>

    </React.Fragment>)
}
export default AddItems;
