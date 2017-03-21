import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Header from '../components/Header'
import Customers from '../Customers/Customers';
import Products from '../Products/Products';
import Invoices from '../Invoices/Invoices';
import InvoiceEdit from '../Invoices/InvoiceEdit';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" titleTemplate="%s | Invoice App" />
        <Header />
        <div className="container">
          <Route exact={true} path="/" render={() => <h2>Hello</h2>} />
          <Route path='/customers' component={Customers} />
          <Route path='/products' component={Products} />
          <Route exact={true} path='/invoices' component={Invoices} />
          <Route path='/invoices/:id' component={InvoiceEdit} />
        </div>
      </div>
    )
  }
}

export default App;
