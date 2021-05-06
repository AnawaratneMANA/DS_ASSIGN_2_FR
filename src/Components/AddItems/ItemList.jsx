import React, { Component } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import Auth from "../../Validations/AuthenticationClass";


const ItemList = ({userId}) => {

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         items:[]
    //     }
    // }


    const items = useSelector((state) => state.items );

    //Remove Later 
    // componentDidMount(){
    //     axios.get("http://localhost:8073/displayCreditCardDetails/").then(response => {
    //         this.setState({details: response.data});
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

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
                               items.map(
                                   item => 
                                   <tr key = {item.id}>
                                       <td>{item.title}</td>
                                       <td>{item.price}</td>
                                       <td>{item.description}</td>                    
                                  </tr>
                               )
                           
                           }
                       </tbody>
                       </table>
                   <button onClick={() => {
                       Auth.logout(()=>{
                           //props.history.push("/")
                       })
                   }}>

                   </button>
                   </div> 
            </div>
        );
    }

export default ItemList;
