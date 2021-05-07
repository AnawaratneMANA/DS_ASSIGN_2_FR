import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import {Button} from "react-bootstrap";
import {Container} from "@material-ui/core";
import login_image from "../../Components/Login/Login/Image/login_image.jpg";
const Item = props =>(
    <tr>
        {/*<td>{props.displayitem.id}</td>*/}
        <td>{props.displayitem.title}</td>
        <td>{props.displayitem.price}</td>
        <td>{props.displayitem.description}</td>
        <td>{props.displayitem.image}</td>
        <td>{props.displayitem.createdAt}</td>
        <td>{props.displayitem.updateAt}</td>
        <td>
            <Link to={"/itemlist/update-item/"+props.displayitem.id}>edit</Link> |
            <a href="/itemlist" onClick={() => {
                                    props.deleteValues(props.displayitem.id)
                                }}>delete</a>
        </td>
    </tr>
)
class ItemList extends Component {

    constructor(props) {
        super(props);
        this.deleteValues = this.deleteValues.bind(this);
        this.state = {displayitem: []};
    }
    componentDidMount() {
        axios.get("http://localhost:8073/displayitem")
            .then(response => {
                 this.setState({displayitem: response.data});

        }).catch((err) => {
            console.log(err);
        })
    }

// componentDidMount() {
//     axios.get("http://localhost:8073/displayCreditCardDetails")
//         .then(response => {
//             console.log("error going 3");
//             this.setState({displayCreditCardDetails: response.data})
//             console.log("error going 5");
//         }).catch((err) => {
//         console.log("error going 1");
//     })
// }
    deleteValues(id) {
        console.log(id);
        if(window.confirm('Are you sure')){
            axios.delete('http://localhost:8073/deleteitem/'+id)
                .then(res => console.log(res.data));
            this.setState({
                displayitem: this.state.displayitem.filter(el => el.id !== id)
            })
        }

    }

    itemList(){
        return this.state.displayitem.map(currentitemdetails => {
            return <Item displayitem = {currentitemdetails} deleteValues = {this.deleteValues} key ={currentitemdetails.id}/>;
        })
    }

    render() {
        return (
            <Container>
               <h2 className="text-center">Item List</h2>
               <div className="row">
                   <table className = "table table-striped table-bordered" >
                       <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Create At</th>
                                <th>Update At</th>
                                <th>Action</th>
                            </tr>
                       </thead>

                       <tbody>
                            {this.itemList()}
                       </tbody>
                    </table>
                   
                   </div>
            </Container>


        );
    }
}

export default ItemList;
