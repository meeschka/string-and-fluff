import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Header from './components/header/header'
import HomePage from './containers/homepage/homepage'
import ShopPage from './containers/shopPage/shopPage'
import SignInOrSignUp from './containers/signin-or-signup/signin-or-signup'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInOrSignUp} />
      </Switch>
    </div>
  );
}

export default App;
