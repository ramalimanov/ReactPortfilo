import React, { Component } from 'react'
import './css/skills.css'
class skills extends Component {

  render() {
    return (
      <div className="skillsContainer" >
        <div className="skillsTitle">My Full Stack Web Developer Skills:</div>
        <div>
          <div class="skills" id="skill-1" style={{ left: '12%', top: '80%' }}>
            <ul>
              <li><span class="html5"></span><em>HTML5</em></li>
              <li><span class="css3"></span><em>CSS3</em></li>
              <li><span class="JavaScript"></span><em>JavaScript</em></li>
              <li><span class="jQuery"></span><em>jQuery</em></li>
              <li><span class="Bootstrap"></span><em>Bootstrap</em></li>
              <li><span class="APLs"></span><em>APLs</em></li>
              <li><span class="JSON"></span><em>JSON</em></li>
              <li><span class="AJAX"></span><em>AJAX</em></li>
              <li><span class="Nodejs"></span><em>Nodejs</em></li>
              <li><span class="Expressjs"></span><em>Expressjs</em></li>
              <li><span class="MySQL"></span><em>MySQL</em></li>
              <li><span class="MongoDB"></span><em>MongoDB</em></li>
              <li><span class="React"></span><em>React</em></li>           
              <li><span class="Heroku"></span><em>Heroku</em></li>
              <li><span class="Git"></span><em>Git</em></li>
              <li><span class="GitHub"></span><em>GitHub</em></li>
              <li><span class="RealTimeCloudDatabase"></span><em>Real Time Cloud Database</em></li>
              <li><span class="TestingCode"></span><em>Testing Code</em></li>
              <li><span class="DataSctructureandAlgorithms"></span><em>Data Sctructure and Algorithms</em></li>
            </ul>
          </div>
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
export default skills
