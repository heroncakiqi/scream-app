import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Context } from '../context/GlobalState';

const HeaderContainer = styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: center;
    background-color: #48337B;
    a {
      margin: 0 10px;
      text-decoration: none;
      color: white;
      text-transform: uppercase;
    }
`;


const Header = props => {
    const { auth } = useContext(Context); 
    return (
      <HeaderContainer>
        {
          auth.authenticated ? 
          <Link><i className="fas fa-plus"></i></Link>
          : <Link to='/login'>Log In</Link>
        }
        <Link to='/'><i className="fas fa-home"></i></Link>
        {
          auth.authenticated ? 
          <Link><i className="fas fa-bell"></i></Link>
          : <Link to='/signup'>Sign Up</Link>
        }
      </HeaderContainer>
    )
}

export default Header