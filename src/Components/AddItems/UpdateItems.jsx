import React from 'react';

function UpdateItems(){
    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h1 className="mb-5">Update Item</h1>
            <div className="form-group">
                <label for="name">Title</label>
                <input id="name" type="text" className="form-control" name="name" placeholder="Enter title" />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input id="price" type="number" className="form-control" name="price" placeholder="Enter price" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input id="description" type="text" className="form-control" name="description" placeholder="Enter description" />
            </div>

            <div className="form-group">
                <label for="img">Item image</label>
                <input type="file" className="form-control-file" id="img" />
            </div>

            <br />

            <div className="text-right">
                <button type = 'submit' className="btn btn-primary">Add</button>
            </div>
        </form>
        </div>
    );
}

export default UpdateItems;