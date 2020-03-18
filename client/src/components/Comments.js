import React, {useState, useContext} from "react"
import styled from 'styled-components'
import {Context as PostContext} from "../context/postsContext"

const CommentsContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`
const FormStyle = styled.form`
 display: flex;
 margin-bottom: 6px;
 input {
   flex: 1;
   outline: none;
   padding: 8px;
   background: #F0F2F5;
   border: none;
   border-radius: 6px;
 }
`
const FormContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 10px;
`

const SingleComment = styled.div`
  display: flex;
`

const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 15px;
  margin: 5px;
`;

const CommentTextContainer = styled.div`
  background: #E9E9E9;
  margin: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  background: #F0F2F5;
`

const Comments = ({comments}) => {
const {addComment} = useContext(PostContext) 
const [inputValue, setInputValue] = useState('')
const handleSubmmit = (e) => {
  e.preventDefault()
  if(!!inputValue){
    addComment(inputValue)
  }
}
  return (
    <CommentsContainer>
      <FormContainer>
        <FormStyle onSubmit={handleSubmmit}>
          <input 
            type="text" 
            placeholder="Write a comment.."
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </FormStyle>
        <div>
          {comments.map(({comment, _id, author}) => (
            <SingleComment key={_id}>
              <UserImage src={author.image} />
              <CommentTextContainer>
                <span>{author.username}: </span>
                <span>{comment}</span>
              </CommentTextContainer>
            </SingleComment>
          ))}
        </div>
      </FormContainer>
    </CommentsContainer>
  )
}

export default Comments