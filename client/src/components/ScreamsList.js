import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../context/GlobalState';
import Scream from './Scream';

const ListStyle = styled.div`
  flex: 2;
`;

const ScreamsList = props => {
  const { screams, fetchData } = useContext(Context);
  useEffect(() => {
    async function get() {
     await fetchData();
    }
    get();
  },[]);  
  return (
    <ListStyle>
      {screams.map(item => {
        return <Scream key={item._id} scream={item} />
      })}
    </ListStyle>
  )
}

export default ScreamsList;