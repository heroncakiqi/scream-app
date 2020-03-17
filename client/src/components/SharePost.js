import React, {useState, useContext} from 'react'
import { Context as PostsContext } from "../context/postsContext"

const SharePost = () => {
  const {postScream} = useContext(PostsContext)
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!!inputValue) {
      postScream(inputValue)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        autoFocus
        placeholder="share something bro/sis"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        >
      </textarea>
    <button type="submit">share!</button>
  </form>
  )
}

export default SharePost