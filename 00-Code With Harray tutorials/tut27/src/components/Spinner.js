import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="container d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
          <div className="container d-flex align-items-center justify-content-center">
            <img src={loading} alt="loading.." />
          </div>
        </div>
      </>
    )
  }
}

export default Spinner
