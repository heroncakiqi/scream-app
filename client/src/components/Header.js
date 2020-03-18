import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context as AuthContext } from '../context/authContext';
import { Context as GlobalContext } from "../context/globalContext"

const HeaderContainer = styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: center;
    background-color: #3A1772;
    a {
      margin: 0 10px;
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      cursor: pointer
    }
`;


const Header = props => {
  const { state: {authenticated} } = useContext(AuthContext); 
  const {toggleModal} = useContext(GlobalContext)
  const handleModal = () => {
    toggleModal("create_post")
  }
  return (
    <HeaderContainer>
      {
        authenticated ? 
        <>
          <a onClick={handleModal}><i className="fas fa-plus"></i></a>
          <Link to='/'><i className="fas fa-home"></i></Link>
          <Link to='/explore'><i className="fas fa-search"></i></Link>
          <a><i className="fas fa-bell"></i></a>
        </>
        : 
        <>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </>
      }
    </HeaderContainer>
  )
}

export default Header