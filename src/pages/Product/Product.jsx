import React, { Component, Fragment } from "react";
import Comments from "../../components/Comments";

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
        <div className='container-fluid pt-5'>
            <div className='row'>
                <div className='mx-auto d-flex justify-content-center'>
                    <img src={this.props.product.media.path} alt='product' className='w-50' />
                </div>
                <div className='mx-auto'>
                    <h3 className='my-3'><em>Manufacturer : </em><strong>{this.props.product.company}</strong></h3>
                    <h3 className='my-3'><em>Model : </em><strong>{this.props.product.title}</strong></h3>
                    <h3 className='my-3'><em>Price : </em> $ <strong>{this.props.product.price}</strong></h3>
                    <p className='text-muted lead'><em>Info : </em>{this.props.product.info}</p>
                </div>
            </div>
        </div>
        <Comments id={id} />
      </Fragment>
    );
  }
}

export default Product;
