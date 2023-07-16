import React, { Component } from 'react'
import loading from '../components/loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div>
      <img src={loading.gif} alt="loading"/>
      </div>
    )
  }
} 

export default spinner