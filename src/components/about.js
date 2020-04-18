import React, { Component } from 'react'
import './css/about.css'

class about extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <div className="aboutTitle">
          <div className="animateForward1">About Me:</div>
          <br></br>
          <p style={{ color: 'white', fontSize: '16px' }}>
          My name is Ramal Imanov from Lenkoran. Azerbaijan. I am working Amazon Company more than two years.
          <br></br> I am learning Full Stack Web Developer and styding HTML5, CSS3, JavaScript, Bootstrap,JQuery, 
          <br></br> AJAX, Git, GitBash, Node.js,Express.js, MySQL, MongoDB, React.js, Heroku. I love to write code and
          <br></br> do problem solve. I love to play Basketball, Swiming, travel around the world, watching movies and reading books.
            </p>
        </div>
        <div class="loading-animation">
          <span class="first-ball"></span>
          <span class="second-ball"></span>
          <span class="third-ball"></span>
        </div>
      </div>
    )
  }
}

export default about
