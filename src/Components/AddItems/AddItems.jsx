import React, {useState, useEffects} from 'react';
import {createItem} from '../../actions/item';
import {useDispatch, useSelector} from 'react-redux';
import ItemList from './ItemList';
import { Link } from 'react-router-dom'
import './style.css'
import FileBase from 'react-file-base64';
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

    }

    //Submit Details 
    const handleSubmit = (e) => {
        //Stop page from loading.
        e.preventDefault();
        console.log(itemData);
        //submit data
        dispatch(createItem(itemData));

        //window.location = '/additem';
        clear(); 
    }



    return (<React.Fragment>
         <div className="form-container">
             {/*Add the search input here. Following Line make spaces from top*/}
             <div className={"toolbar"}/>
            <form onSubmit={handleSubmit}>
                <h2 className="mb-5">Add Item</h2>
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
                </div>
                <div>
                   {/*<input type="file" className="form-control-file" id="img" value={itemData.image} onChange={(e) => setItemData({...itemData, image: e.target.value})}/ >*/}
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setItemData({...itemData, image: base64})}
                    />
                </div>
                <br />
                <div className="text-right">
                        <button type='submit' className='button_add'>Add</button>
                </div>
                <div className="text-right">
                <Link to="/itemlist">
                    <button type = "button" className='button_list'>List</button>
                </Link>
                </div>
            </form>
            </div>

    </React.Fragment>)
}
export default AddItems;
