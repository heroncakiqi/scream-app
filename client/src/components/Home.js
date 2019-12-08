import React from 'react'
import styled from 'styled-components'

import ProfileWindow from './ProfileWindow';
import ScreamsList from './ScreamsList';

const Home = () => {
  const HomeStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto;
  `;
  return (
    <HomeStyle>
      <ScreamsList />
      <ProfileWindow />
    </HomeStyle>
  )
}

export default Home;
