import React, { Component } from 'react'
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        da featuree
      </div>
    )
  }
}

export default requireAuth(Feature);