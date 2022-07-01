import React, { Component, useState } from 'react';

class CarroProduct extends Component{


    render(){
        return (
            <div className="card m-2 p-2 text-center position-relative">
                <div className="card-body">
                    <div className='row '>
                        <div className='col-4'>
                            <img className='img-fluid'
                            src={this.props.product.UrlImagen} alt="Producto Imagen" />
                        </div>
                        <div className='col-8'>
                            <p>{this.props.product.Descripcion}</p>
                            <p style={this.CarroItemCss()}>Precio : $ {this.props.product.Precio}</p>
                            <p style={this.CarroItemCss()}>Cantidad : {this.props.product.Cantidad}</p>
                            <p style={this.CarroItemCss()}>Subtotal : $ {this.props.product.Subtotal}</p>
                        </div>
                        
                    </div>
                </div>
                <a 
                        onClick={() => this.props.DelFromCart(this.props.product)} 
                        style={this.BtnDelCss()}><i className="fa-solid fa-trash"></i></a>
            </div>
        )
    }

    CarroItemCss(){
        return {
          lineHeight: '0.5',
        }
      }
    BtnDelCss(){
    return {
        position: 'absolute',
        top: '5px',
        right: '5px'
    }
    }
}

export default CarroProduct