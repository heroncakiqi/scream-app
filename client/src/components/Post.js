import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import Comments from "./Comments"
import {Context as UserContext} from "../context/userContext"
import {Context as PostContext} from "../context/postsContext"

 const ContainerStyle = styled.div`
 margin: 20px;
 `;

const PostStyle = styled.div`
  display: flex;
`;

const InfoStyle = styled.div`
  margin: 10px;
  width: 350px;
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

const CommentsIconWarpperStyle = styled.div`
  display: inline-block;
`;

const heartIconStyle = {
  color: "#6CBD3F",
  marginRight: 5
}

const Post = ({scream}) => {
  const {state: user} = useContext(UserContext)
  const {like, fetchComments} = useContext(PostContext)  
  const heartIconToShow = scream.likes.includes(user._id) ? "fas fa-heart" : "far fa-heart"

  const handleCommentClick = () => {
    fetchComments(scream)
  }
  return (
    <ContainerStyle>
      <PostStyle>
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
          <div>
            <i 
              style={heartIconStyle} 
              className={heartIconToShow}
              onClick={() => like(scream._id)}>
            </i>
              {scream.likes.length} likes {'  '}
            <CommentsIconWarpperStyle
              onClick={handleCommentClick}
            >
              <i className="far fa-comments"></i>
              {scream.comments.length} comments
            </CommentsIconWarpperStyle>
          </div>
        </InfoStyle>
      </PostStyle>
      {scream.loadedComments ? <Comments comments={scream.loadedComments} /> : null}
    </ContainerStyle>
  )
}

export default Post;