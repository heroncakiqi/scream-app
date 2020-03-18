import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import Comments from "./Comments"
import {Context as UserContext} from "../context/userContext"
import {Context as PostContext} from "../context/postsContext"

 const ContainerStyle = styled.div`
   margin: 20px;
   background: #FFFFFF;
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
  cursor: pointer;
  margin-left: 8px;
  i {
    margin-right: 4px;
  } 
`;

const heartIconStyle = {
  color: "#ED4956",
  marginRight: 4,
  cursor: "pointer",
}

const Post = ({scream}) => {
  const {state: user} = useContext(UserContext)
  const {like, fetchComments} = useContext(PostContext)  
  const heartIconToShow = scream.data.likes.includes(user._id) ? "fas fa-heart" : "far fa-heart"

  const handleCommentClick = () => {
    fetchComments(scream)
  }
  return (
    <ContainerStyle>
      <PostStyle>
        <ImageStyle>
          <img src={scream.data.author.image} alt='posters profilepicture' />
        </ImageStyle>
        <InfoStyle>
          <UsernameStyle>
            {scream.data.author.username}
          </UsernameStyle>
          <TextStyle>
            {scream.data.text}
          </TextStyle>
          <div>
            <i 
              style={heartIconStyle} 
              className={heartIconToShow}
              onClick={() => like(scream.data._id)}>
            </i>
              {scream.data.likes.length} likes {'  '}
            <CommentsIconWarpperStyle
              onClick={handleCommentClick}
            >
            <i className="far fa-comment-alt"></i>
              {scream.data.comments.length} comments
            </CommentsIconWarpperStyle>
          </div>
        </InfoStyle>
      </PostStyle>
      {scream.comments.isOpen ? <Comments comments={scream.comments.loaded} /> : null}
    </ContainerStyle>
  )
}

export default Post;