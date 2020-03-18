import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components'
import { Provider as PostProvider }  from './context/postsContext';
import { Provider as UserProvider }  from './context/userContext';
import { Provider as AuthProvider }  from './context/authContext';
import { Provider as GlobalProvider } from './context/globalContext'

import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Explore from './pages/Explore'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: #F0F2F5;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
    return (
      <GlobalProvider>
        <AuthProvider>
          <UserProvider>
            <PostProvider>
              <Router>
                <AppContainer>
                  <GlobalStyle />
                  <Header />
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/explore' exact compnent={Explore} />
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/login' component={LogIn}/>
                  </Switch>
                </AppContainer>
              </Router>
            </PostProvider>
          </UserProvider>
        </AuthProvider>
      </GlobalProvider>
    )
}

export default App  