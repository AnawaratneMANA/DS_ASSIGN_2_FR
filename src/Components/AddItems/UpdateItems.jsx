import React, { Component, useState } from 'react'

import {useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import { addCreditCardPayment } from "../../actions/creditcard";
import axios from "axios";

class UpdateItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            title : " ",
            price : " ",
            description : " "



        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editTitleName = this.editTitleName.bind(this);
        this.editPrice = this.editPrice.bind(this);
        this.editDescription = this.editDescription.bind(this);
       // this.editImage = this.editImage.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:8073/getsingleitem/"+this.state.id)
            .then(response => {
                let values = response.data;
                this.setState({
                    title: values.title,
                    price : values.price,
                    description : values.description,
                    //image : values.image
                });

            });
    }
    editTitleName= (event) => {
        this.setState({title: event.target.value});
    }
    editPrice= (event) => {
        this.setState({price: event.target.value});
    }
    editDescription= (event) => {
        this.setState({description: event.target.value});
    }
    // editImage= (event) => {
    //     this.setState({image: event.target.value});
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let item = {id: this.state.id,
            title : this.state.title,
            price : this.state.price,
            description : this.state.description,
            // image : this.state.image
        };
        console.log(item);
        axios.put('http://localhost:8073/updateitem/'+this.props.match.params.id, item).then(() => {
            alert("Item updated");
            window.location = '/itemlist';
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return(
            <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <h1 className="mb-5">Update Item</h1>
                <div className="form-group">
                    <label for="name">Title</label>
                    <input id="name" type="text" className="form-control" name="name" placeholder="Enter title" value = {this.state.title}
                           onChange={this.editTitleName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" className="form-control" name="price" placeholder="Enter price" value = {this.state.price}
                           onChange={this.editPrice}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input id="description" type="text" className="form-control" name="description" placeholder="Enter description" value = {this.state.description}
                           onChange={this.editDescription}/>
                </div>
    
                {/*<div className="form-group">*/}
                {/*    <label for="img">Item image</label>*/}
                {/*    <input type="file" className="form-control-file" id="img" value = {this.state.image}*/}
                {/*           onChange={this.editImage}/>*/}
                {/*</div>*/}
    
                <br />
    
                <div className="text-right">
                    <button type = 'submit' className="btn btn-primary">Update</button>
                </div>
            </form>
            </div>
        );
    }
}

export default UpdateItems;
