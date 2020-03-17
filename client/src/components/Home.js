import React, {useContext, useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import ProfileWindow from './ProfileWindow';
import PostWindow from './PostsWindow';
import CustomModal from './Modal';
import {Context as AuthContext } from "../context/authContext"

const HomeStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  const {state: {authenticated}} = useContext(AuthContext)
  const [elementToRender, setElementToRender] = useState(null)
  useEffect(() => {
    if(!authenticated) {
      setElementToRender(<Redirect to="/login" />)
    } else {
      setElementToRender(
        <HomeStyle>
          <PostWindow />
          <ProfileWindow />
          <CustomModal />
        </HomeStyle>
      )
    }
  }, [authenticated])

  return elementToRender
}

export default Home;
