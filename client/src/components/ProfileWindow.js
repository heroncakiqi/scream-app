import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { Context as UserContext } from '../context/userContext';
import { Context as AuthContext } from '../context/authContext';

const ProfileStyles = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-direction: column;
  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
  .signout-edit {
    display: flex;
    justify-content: space-between;
    width: 100%;
    i {
      cursor: pointer;
    }
  }
`;

const ProfileWindow = () => {
  const { state, fetchUser } = useContext(UserContext);
  const { logout } = useContext(AuthContext)
  useEffect(() => {
    async function get() {
      await fetchUser();
     }
     get();
  },[]);

  return (
    <ProfileStyles>
        <img src={state.image} alt=""/>
        <p>{state.username}</p>
        <p>{state.username && `Joined ${dateFormat(state.date, "mmm, yyyy")}`}</p>
        <div className='signout-edit'>
          <i onClick={() => logout()} className="fas fa-sign-out-alt"></i>
          <i className="far fa-edit"></i>
        </div>
    </ProfileStyles>
  )
}

export default ProfileWindow