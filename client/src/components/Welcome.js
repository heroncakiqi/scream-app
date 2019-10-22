import React from 'react'

import requireAuth from './requireAuth';

const Welcome = () => {
  return (
    <div>
      <h3>Log in or Sign Up to get started!</h3>
    </div>
  )
}

export default requireAuth(Welcome);
