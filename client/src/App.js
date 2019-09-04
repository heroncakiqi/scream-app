import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import Header from './components/Header';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';
import LogOut from './components/auth/LogOut';
import LogIn from './components/auth/LogIn';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Welcome} />
          <Route path='/signup' component={SignUp}/>
          <Route path='/feature' component={Feature}/>
          <Route path='/logout' component={LogOut}/>
          <Route path='/login' component={LogIn}/>
        </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App  