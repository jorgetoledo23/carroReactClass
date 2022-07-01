import React, { Component, useState } from 'react';

class Product extends Component{


    render(){
        return (
            <div className="card col-md-3 m-2 p-2 text-center">
                <div className="card-body">
                    <h2>{this.props.product.Descripcion}</h2>
                    <p>$ {this.props.product.Precio}</p>
                    <img width="200px" height="200px"
                    src={this.props.product.UrlImagen} alt="Producto Imagen" />
                    <p>Stock: {this.props.product.Stock}</p>
                    <button onClick={() => this.props.AddToCart(this.props.product)}
                    className='btn btn-outline-primary col-4'>Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default Product