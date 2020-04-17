import React, { useEffect } from 'react';
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
import { checkUserSession } from './redux/user/user-actions'

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {checkUserSession()}, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={
          () => currentUser ? 
          (<Redirect to='/' />) :
          (<SignInOrSignUp />)
        } />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
