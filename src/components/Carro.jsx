import React, {Component, useState} from 'react'
import './Carro.css';
import CarroProduct from './CarroProduct';


class Carro extends Component{
  

  render(){
        return <div className="carro" style={this.CarroCss()} >
                  <a style={this.CloseBtn()} onClick={this.props.CarroState}>&times;</a>
                  <div id="cardCarro" className="card m-2 p-2">
                    {this.props.CarroProducts.map(P => <CarroProduct key={P.Id} product={P} DelFromCart={this.props.DelFromCart}/>)}
                  </div>
                  <div className="card">
                      <p id="total" className="card-title m-1">Total: $ {this.props.Total}</p>
                  </div>
              </div>
  }

    CarroCss(){
      return {
        position: 'fixed',
        border: '1px solid black',
        width: this.props.carroVisibleState ? '450px' : '0px',
        display: this.props.carroVisibleState ? 'block' : 'none',
        height: '100vh',
        right: '0',
        top: '0',
        zIndex: '99',
        backgroundColor: '#fff',
        padding: '50px 10px',
        transition: '0.5s',
        textAlign: 'center',
        boxSizing: 'border-box'
      }
    }
      CloseBtn(){
        return {
          position: 'absolute',
          top: '0',
          right: '25px',
          fontSize: '36px',
          marginLeft: '50px',
          cursor: 'pointer'
        }
        
      }
    

}
 
export default Carro