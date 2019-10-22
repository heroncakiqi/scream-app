import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../context/GlobalState';

const Header = props => {
    const { auth } = useContext(Context); 
    return (
      <div className='header'>
        <div className='a'>
          <Link to='/'>Redux Auth</Link>
          <Link to='/feature'>Feature</Link>
        </div>
          {
            !auth.authenticated ?
            <div>
              <Link to='/login'>Log In</Link>
              <Link to='/signup'>Sign Up</Link>
            </div>
            : 
            <Link to='logout'>Log out</Link>
          } 
      </div>
    )
}

export default Header