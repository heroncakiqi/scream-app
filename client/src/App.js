import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components'
import GlogalState from './context/GlobalState';

import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';
import LogOut from './components/auth/LogOut';
import LogIn from './components/auth/LogIn';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
    return (
      <GlogalState>
        <Router>
          <AppContainer>
            <GlobalStyle />
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={SignUp}/>
            <Route path='/feature' component={Feature}/>
            <Route path='/logout' component={LogOut}/>
            <Route path='/login' component={LogIn}/>
          </AppContainer>
        </Router>
      </GlogalState>
    )
}

export default App  