import React, { Component } from 'react'
import './css/home.css'

class home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeMain">
          <div className="animateForward">Hello</div>
          <div className="animateForward">Welcome my page</div>
          <div className="animateForward">I am Full Stack Web Developer</div>
        </div>
        {}
        <div class="pulse1"></div>
        <div class="pulse2"></div>
        <div class="icon"></div>
      </div >
    )
  }
}
export default home
