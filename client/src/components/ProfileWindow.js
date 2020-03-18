import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { Context as UserContext } from '../context/userContext';
import { Context as AuthContext } from '../context/authContext';
import { Context as GlobalContext } from '../context/globalContext';

const ProfileStyles = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-direction: column;
  margin-top: 20px;
  background: #FFFFFF;
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
  const { state: user, fetchUser } = useContext(UserContext);
  const { logout } = useContext(AuthContext)
  const { toggleModal } = useContext(GlobalContext)
  useEffect(() => {
    fetchUser();
  },[]);

  return (
    <ProfileStyles>
        <img src={user.image} alt=""/>
        <p>{user.username}</p>
        <p>{user.username && `Joined ${dateFormat(user.date, "mmm, yyyy")}`}</p>
        <div className='signout-edit'>
          <i onClick={() => logout()} className="fas fa-sign-out-alt"></i>
          <i onClick={() => toggleModal('edit_profile')} className="far fa-edit"></i>
        </div>
    </ProfileStyles>
  )
}

export default ProfileWindow