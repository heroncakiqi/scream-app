import React from 'react'
import styled from 'styled-components'

import requireAuth from './requireAuth';

const Home = () => {
  const Main = styled.main`
    display: flex;
    justify-self: center;
    width: 800px;
    background-color: pink;
    height: 700px;
    margin: 0 auto;
  `;
  return (
    <Main>
      <h3></h3>
    </Main>
  )
}

export default requireAuth(Home);
