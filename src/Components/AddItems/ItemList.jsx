import React, { Component } from 'react';

class ItemList extends Component {

    constructor(props){
        super(props)

        this.state = {
            items:[]
        }
    }

    render() {
        return (
            <div>
               <h2 className="text-center">Item List</h2>
               <div className="row">
                   <table className = "table table-striped table-bordered">
                       <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                       </thead>

                       <tbody>
                           {
                               this.state.items.map(
                                   item => 
                                   <tr key = {item.id}>
                                       <td>{item.title}</td>
                                       <td>{item.price}</td>
                                       <td>{item.description}</td>
                                       <td>{item.image}</td>
                                      
                                  </tr>
                               )
                           
                           }
                       </tbody>
                       </table>
                   </div> 
            </div>
        );
    }
}

export default ItemList;
