import React, {useContext} from 'react'
import { Context as UserContext } from '../context/userContext';

const EditProfile = () => {
  const { state: user } = useContext(UserContext);
  return (
    <div>
      <form>
        <img src={user.image} />
        <input type="file"/>
        <input type="text"/>
        <input type="text"/>
      </form>
    </div>
  )
}

export default EditProfile