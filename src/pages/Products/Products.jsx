import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from '../../components/Title';
import PropTypes from 'prop-types';

class Products extends Component {
  componentDidMount() {
    this.props.getProductsList(this.props.user);
  }

  render() {
    const { products } = this.props;
    return (
      <div className='py-5'>
            <div className='container'>
                <Title name='our' title='products'/>
                <div className='row'>
                    <div className='img-container p-5'>
                    <ul className='list-unstyled'>
                        {products.map(item => (
                        <li key={item._id}>
                            <Link to={`/products/${item._id}`}>
                            <div className='title'>{item.title}</div>
                            <img src={item.media.path} alt='product' className='w-25' />
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

// Checking shopItems.json values

Products.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

export default Products;
