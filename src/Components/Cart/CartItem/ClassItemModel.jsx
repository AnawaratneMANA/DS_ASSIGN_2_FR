import React, { Component } from 'react'

export class ClassItemModel extends Component {
    constructor(id, name, price, description) {
        super();
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
