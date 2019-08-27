import React, { Component } from 'react';

class WrongPageURL extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-uppercase pt-5'>
                        <p className='display-3'>404</p>
                        <p>page not found</p>
                        <p>the requested URL <span className='text-danger'>{this.props.location.pathname}</span> was not found</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WrongPageURL;