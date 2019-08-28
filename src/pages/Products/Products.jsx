import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from '../../components/Title';
import { ProductWrapper} from '../../styles/styles';

class Products extends Component {
  componentDidMount() {
    this.props.getProductsList(this.props.user);
  }

  render() {
    const { products } = this.props;
    return (
      <div className='py-5'>
            <div className='container-fluid'>
                <Title name='our' title='products'/>
                <div className='row'>
                        {products.map(item => (
                            <div key={item._id} className='col-md-6 col-lg-4 mx-auto my-3'>
                            <ProductWrapper className='card py-2'>
                                    <div className='img-container'>
                                        <Link to={`/products/${item._id}`} className='d-flex justify-content-center mb-2'>
                                            <img src={item.media.path} alt='product' className='w-50' />
                                        </Link>
                                        <div className='card-footer'>
                                            <div className='d-flex justify-content-center'>
                                                <p className='align-self-center mb-0 font-weight-bold'>
                                                    {item.title}
                                                </p>      
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <h5 className='text-blue font-italic mb-0'>
                                                    <span className='mr-1'>$</span>
                                                    {item.price}
                                                </h5>
                                            </div>
                                          </div>
                                    </div>
                            </ProductWrapper>
                            </div>
                        ))}
                </div>
            </div>
      </div>
    );
  }
}

export default Products;
