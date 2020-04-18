import React, { Component } from 'react'
import './css/project.css'

export class project extends Component {
  render() {
    return (
      <div>

        <div className="skillsTitle">Projects:</div>
        <article class="flashcard" id="flashcarddiv-1" style={{ top: '45%', left: '12%' }}>
          <input id="flashcard-1" type="checkbox" />
          <label for="flashcard-1">
            <section class="front">
              <div style={{ fontSize: '35px', fontFamily: 'Lobster', marginTop: '28%' }}>About  >>></div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '12px' }}><h2>NBA Project</h2></div>
            </section>
            <section class="back">
              <div className="flashback">The purpose of this application is for users who want to play with their favorite players on their team. 
              Or for users who just want to relax and play some games... <br></br>
              <a href="https://github.com/ramalimanov/Project2" class="center btn waves-effect waves-green"
                type="submit" name="action" target="blank">GitHub Repository
              </a>
              <br></br>
              <a href="https://basketball-game.herokuapp.com/index.html"
            class="center btn waves-effect waves-green"
                type="submit" name="action" target="blank">Open App
            </a>
              </div>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-2" style={{ top: '45%', left: '41%' }}>
          <input id="flashcard-2" type="checkbox" />
          <label for="flashcard-2">
            <section class="front">
              <div style={{ fontSize: '35px', fontFamily: 'Lobster', marginTop: '28%' }}>About  >>></div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '12px' }}><h2>CookOut Project</h2></div>
            </section>
            <section class="back">
              <div className="flashback"> Do you want to cook at home or go out? Why not start by going to CookOut a 
                web application that alows ...
                <br></br>
                <a href="https://github.com/ramalimanov/Project1-CookOut"
                class="center btn waves-effect waves-green" type="submit" name="action" target="blank">GitHub Repository
              </a>
              <br></br>
              <a href="https://smaji08.github.io/CookOut/"
              class="center btn waves-effect waves-green"
                  type="submit" name="action" target="blank">Open App
              </a>
                </div>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-3" style={{ top: '45%', left: '70%' }}>
          <input id="flashcard-3" type="checkbox" />
          <label for="flashcard-3">
            <section class="front">
              <div style={{ fontSize: '35px', fontFamily: 'Lobster', marginTop: '28%' }}>About  >>></div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '12px' }}><h2>Burger App</h2></div>
            </section>
            <section class="back">
              <div className="flashback">Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat
                Whenever a user submits a burger's name, your app will display...
                <br></br>
                <a href="https://github.com/ramalimanov/homework-burger" class="center btn waves-effect waves-green"
                type="submit" name="action" target="blank">GitHub Repository
              </a>
              <br></br>
              <a href="https://fast-temple-88364.herokuapp.com/index"
              class="center btn waves-effect waves-green"
                  type="submit" name="action" target="blank">Open App
              </a>
                </div>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-4" style={{ top: '90%', left: '12%' }}>
          <input id="flashcard-4" type="checkbox" />
          <label for="flashcard-4">
            <section class="front">
              <div style={{ fontSize: '35px', fontFamily: 'Lobster', marginTop: '28%' }}>About >>></div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '12px' }}><h2>Day Planner</h2></div>
            </section>
            <section class="back">
              <div className="flashback">DayPlanner home work. Using HTML,CSS,JS Day panner between 09:00 am - 05pm If
                </div>
                <br></br>
                <a href="https://github.com/ramalimanov/dayplanner" class="center btn waves-effect waves-green"
                type="submit" name="action" target="blank">GitHub Repository
              </a>
              <br></br>
              <a href="https://ramalimanov.github.io/dayplanner/"
              class="center btn waves-effect waves-green"
                  type="submit" name="action" target="blank">Open App
              </a>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-5" style={{ top: '90%', left: '41%' }}>
          <input id="flashcard-5" type="checkbox" />
          <label for="flashcard-5">
            <section class="front">
              <div style={{ fontSize: '35px', fontFamily: 'Lobster', marginTop: '28%' }}>About >>></div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '12px' }}><h2>Weather Dashboard</h2></div>
            </section>
            <section class="back">
              <div className="flashback">Build a weather dashboard application with search functionality to find ...
                  </div>
              <br></br>
              <a href="https://github.com/ramalimanov/weatherdashboard" class="center btn waves-effect waves-green"
                  type="submit" name="action" target="blank">GitHub Repository
                </a>
                <br></br>
                <a href="https://ramalimanov.github.io/weatherdashboard/."
                class="center btn waves-effect waves-green"
                    type="submit" name="action" target="blank">Open App
                </a>
            </section>
          </label>
        </article>
      </div >
    )
  }
}


export default project
