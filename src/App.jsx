import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carro from './components/Carro';
import Products from './data.json'
import ProductList from './components/ProductList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      carroVisibleState : false,
      products : Products,
      carroProducts : [],
      Total : 0
    };
    this.AddToCart = this.AddToCart.bind(this);
    this.CarroState = this.CarroState.bind(this);
    this.DelFromCart = this.DelFromCart.bind(this);
  }

  AddToCart(P){
    //console.log('Producto Agregado ' + P.Id)
    const exits = this.state.carroProducts.find(x => x.Id === P.Id)
    //console.log(exits)
    if(exits === undefined){
      this.setState({
        carroProducts: [...this.state.carroProducts, {...P, Cantidad : 1, Subtotal : P.Precio}]
      });
    }else{
        exits.Cantidad += 1
        const subtotal = P.Precio * exits.Cantidad
        exits.Subtotal = subtotal
    }
    
    this.UpdateTotal()
  }

  CarroState(){
    this.setState({
      carroVisibleState: !this.state.carroVisibleState,
    });
  }

  DelFromCart(P){
    const newCarroProducts = this.state.carroProducts.filter(p => p.Id !== P.Id)
    this.setState({
      carroProducts: newCarroProducts
    })
    this.UpdateTotal()
  }

  UpdateTotal(){
      console.log(this.state.carroProducts.map(i=>parseInt(i.Subtotal)).reduce((a,b)=>parseInt(a)+parseInt(b), 0))
      
      this.forceUpdate()
  }

  

  render() {

    return (
      <div>
        <Navbar CarroState={this.CarroState} carroVisibleState={this.state.carroVisibleState} />
        <Carro DelFromCart={this.DelFromCart} Total={this.state.Total} CarroProducts={this.state.carroProducts} CarroState={this.CarroState} carroVisibleState={this.state.carroVisibleState} />
        <ProductList Products={this.state.products} AddToCart={this.AddToCart}  /> 
      </div>
      
    );
  }

}

export default App;
