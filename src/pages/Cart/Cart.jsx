import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import { ProductWrapper, ButtonContainer } from '../../styles/styles';

class Cart extends Component {

    state = {
        products: [],
        cart: []
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        })
    };

    render() {

        return (
            <div className='container-fluid text-center d-none d-lg-block '>
                <div className='row'>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uppercase'>product</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uppercase'>name of product</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uppercase'>price</p>
                    </div>
                    <div className='col-10 mx-auto col-lg-2'>
                        <p className='text-uppercase'>quantity</p>
                        <button onClick={() => {this.addToCart()}}>Click Me</button>
                    </div>
                </div>
            </div>
        );
  }
}

export default Cart;
