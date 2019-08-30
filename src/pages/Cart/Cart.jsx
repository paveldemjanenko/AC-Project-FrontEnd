import React, { Component } from "react";

class Cart extends Component {

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
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto col-lg-2'>
                    <img src='' style={{width: '5rem', height:'5rem'}} alt='product' className='img-fluid'/>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <span className='d-lg-none'>product : </span>title
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <span className='d-lg-none'>price : </span>$ price
                </div>
                <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <span className='btn btn-black mx-1' onClick={() => {}}>
                                -
                            </span>
                            <span className='btn btn-black mx-1'>
                                count
                            </span>
                            <span className='btn btn-black mx-1' onClick={() => {}}>
                                +
                            </span>
                        </div>
                    </div>
                </div> 
                </div>
            </div>
        );
  }
}

export default Cart;
