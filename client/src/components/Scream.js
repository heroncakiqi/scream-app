import React from 'react';
import styled from 'styled-components'

const ScreamStyle = styled.div`
  display: flex;
  margin: 10px;
`;

const InfoStyle = styled.div`
  margin: 10px;
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const ImageStyle = styled.div`
  flex: 1;
  img {
    height: auto;
    width: 100%;
  }
`
const UsernameStyle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;
const TextStyle = styled.div`
 flex:2;
`;
const LikeCommentStyle = styled.div`
`;


const Scream = ({scream}) => {
  return (
    <ScreamStyle>
      <ImageStyle>
        <img src={scream.author.image} alt='posters profilepicture' />
      </ImageStyle>
      <InfoStyle>
        <UsernameStyle>
          {scream.author.username}
        </UsernameStyle>
        <TextStyle>
          {scream.text}
        </TextStyle>
        <LikeCommentStyle>
          <i className="far fa-heart"></i>
            {scream.likes.length} likes {'  '}
          <i className="far fa-comments"></i>
            {scream.comments.length} comments
        </LikeCommentStyle>
      </InfoStyle>
    </ScreamStyle>
  )
}

export default Scream;