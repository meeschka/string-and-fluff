import React, { Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './App.css';

import Header from './components/header/header'
import HomePage from './containers/homepage/homepage'
import ShopPage from './containers/shopPage/shopPage'
import CheckoutPage from './containers/checkout-page/checkout-page'
import SignInOrSignUp from './containers/signin-or-signup/signin-or-signup'

import { selectCurrentUser } from './redux/user/user-selectors'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={
            () => this.props.currentUser ? 
            (<Redirect to='/' />) :
            (<SignInOrSignUp />)
          } />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(App);
