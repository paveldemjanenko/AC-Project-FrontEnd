import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Comments from "../../components/Comments";
import { ProductWrapper, ButtonContainer } from '../../styles/styles';

class Product extends Component {
  componentDidMount() {
    this.props.getProductList(this.props.user, this.props.match.params.id);
  }

  render() {
    const { id } = this.props.match.params;
    const { product } = this.props;
    if (!product.media) {
        return product;
      }

    return (
      <Fragment>
        <ProductWrapper className='container-fluid pt-5'>
            <div className='row img-container'>
                <div className='mx-auto d-flex justify-content-center'>
                    <img src={this.props.product.media.path} alt='product' className='w-25 card-img-top' />
                </div>
                <div className='mx-auto'>
                    <h3 className='my-3'><em>Manufacturer : </em><strong>{this.props.product.company}</strong></h3>
                    <h3 className='my-3'><em>Model : </em><strong>{this.props.product.title}</strong></h3>
                    <h3 className='my-3'><em>Price : </em> $ <strong>{this.props.product.price}</strong></h3>
                    <p className='text-muted lead'><em>Info : </em>{this.props.product.info}</p>
                </div>
            </div>
        </ProductWrapper>
        <div className='row d-flex justify-content-center'>
          <Link to='/'>
              <ButtonContainer className='mb-3'>
                go back
              </ButtonContainer>
          </Link>
          <Link to='/cart'>
            <ButtonContainer className='mb-3'>
              add to cart
            </ButtonContainer>
          </Link>
        </div>
        <Comments id={id} />
      </Fragment>
    );
  }
}

export default Product;
