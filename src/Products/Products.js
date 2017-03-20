import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';

import FormProduct from './FormProduct'
import ProductList from '../components/ProductList';
import ModalDelete from '../components/ModalDelete';
import ModalEdit from '../components/ModalEdit';
import { selectedProductSelector } from './selectors';

import {
  getAllProducts,
  deleteProductRequest,
  addNewProductRequest,
  showDeleteProductModal,
  hideDeleteProductModal,
  showEditProductModal,
  hideEditProductModal,
} from './actions';

class Products extends Component {

  componentDidMount() {
    if (this.props.productsList.length == 0) {
      console.log("List in state is empty. Receiving products from DB.");
      this.props.getAllProducts();
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Products" />
        <h2>Products Here</h2>
        <Button onClick={() => this.props.showEditProductModal(null)}>Add New Product</Button>
        {
          this.props.isFetching ? <p>Loading...</p> : null
        }
        <ProductList
          productsList={this.props.productsList}
          onDeleteClick={this.props.showDeleteProductModal}
          onEditClick={this.props.showEditProductModal}
        />
        <ModalDelete
          item={this.props.selectedProduct}
          itemName='product'
          show={this.props.isModalDelete}
          onHide={this.props.hideDeleteProductModal}
          onDeleteClick={this.props.deleteProduct}
        />
        <ModalEdit
          item={this.props.selectedProduct}
          itemName='product'
          show={this.props.isModalEdit}
          onHide={this.props.hideEditProductModal}
        >
          <FormProduct />
        </ModalEdit>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    productsList: state.products.productsList,
    selectedProductId: state.products.selectedProductId,
    isFetching: state.products.isFetching,
    errorMessage: state.products.errorMessage,
    isModalDelete: state.products.isModalDelete,
    isModalEdit: state.products.isModalEdit,
    selectedProduct: selectedProductSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    deleteProduct: (id) => dispatch(deleteProductRequest(id)),
    showDeleteProductModal: (id) => dispatch(showDeleteProductModal(id)),
    hideDeleteProductModal: () => dispatch(hideDeleteProductModal()),
    showEditProductModal: (id) => dispatch(showEditProductModal(id)),
    hideEditProductModal: () => dispatch(hideEditProductModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
