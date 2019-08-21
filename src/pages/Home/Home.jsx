import React, { Component } from 'react';
import banana from '../../images/la-banana.jpg';

class Home extends Component {
    render() {
        return (
            <div className='text-center'>
                <h1>TEST</h1>
                <p>This is test text for testing if testing is <b>OK</b> or <b>not OK</b>, do you understander?</p>
                <img src={banana} alt='Bananas are good for you!' className="rounded" width='20%' height='20%'/>
                <p className='font-weight-bold'>Problems BRO?!</p>
            </div>
        );
    }
};

export default Home;