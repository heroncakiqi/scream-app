import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlogalState from './context/GlobalState';

import Header from './components/Header';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';
import LogOut from './components/auth/LogOut';
import LogIn from './components/auth/LogIn';

import './App.css';

const App = () => {
    return (
      <GlogalState>
        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Welcome} />
            <Route path='/signup' component={SignUp}/>
            <Route path='/feature' component={Feature}/>
            <Route path='/logout' component={LogOut}/>
            <Route path='/login' component={LogIn}/>
          </div>
        </Router>
      </GlogalState>
    )
}

export default App  