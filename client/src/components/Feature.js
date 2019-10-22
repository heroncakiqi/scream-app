import React, { Component } from 'react'
import requireAuth from './requireAuth';

const Feature = (props) => {
  return (
    <div>
      da featuree
    </div>
  )
}


export default requireAuth(Feature);