import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Header from './components/header/header'
import HomePage from './containers/homepage/homepage'
import ShopPage from './containers/shopPage/shopPage'
import SignInOrSignUp from './containers/signin-or-signup/signin-or-signup'
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInOrSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
