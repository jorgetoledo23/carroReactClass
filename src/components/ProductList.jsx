import React, { Component, useState } from 'react';
import Product from './Product';

class ProductList extends Component{


    render(){
        return (
            <div className="row justify-content-evenly">
                {this.props.Products.map(P => <Product product={P} key={P.Id} AddToCart={this.props.AddToCart} />)}
            </div>
        )
    }
}

export default ProductList