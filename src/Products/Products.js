import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';

class Products extends Component {
  render() {
    return (
      <div>
        <Helmet title="Products" />
        <h2>Products</h2>
        <Button>Add New Product</Button>
      </div>
    )
  }
}

export default Products;
