import React, { Component } from 'react'
import './css/contact.css'


class contact extends Component {
  render() {
    return (
      <div>
        <div className="contactTitle">
          <div className="animateForward2">Contact Me:</div>
          <br></br>
          <p className="label">FIND ME AT :</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="answer">Ramal Imanov</p>
          <br></br><br></br><p className="label">PHONE :</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="answer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1 (774) 417 2585</p>
          <br></br><br></br><p className="label">E-MAIL :</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="answer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imanov.r@yahoo.com</p>
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
export default contact
