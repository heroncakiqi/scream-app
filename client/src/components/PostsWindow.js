import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context as PostsContext } from '../context/postsContext';
import Post from './Post';

const ListStyle = styled.div`
  flex: 2;
`;

const PostsWindow = props => {
  const { state, fetchData } = useContext(PostsContext);
  useEffect(() => {
    fetchData()
  },[]);  
  return (
    <ListStyle>
      {state.map(item => {
        return <Post key={item._id} scream={item} />
      })}
    </ListStyle>
  )
}

export default PostsWindow;