import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { Context } from '../context/GlobalState';

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
  const { user, fetchUser, logout } = useContext(Context);
  useEffect(() => {
    async function get() {
      await fetchUser();
     }
     get();
  },[]);

  return (
    <ProfileStyles>
        <img src={user.image} alt=""/>
        <p>{user.username}</p>
        <p>{user.username && `Joined ${dateFormat(user.date, "mmm, yyyy")}`}</p>
        <div className='signout-edit'>
          <i onClick={() => logout()} className="fas fa-sign-out-alt"></i>
          <i className="far fa-edit"></i>
        </div>
    </ProfileStyles>
  )
}

export default ProfileWindow