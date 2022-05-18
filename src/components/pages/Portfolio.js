import React from 'react';
import '../styles/Portfolio.css';

export default function Portfolio() {
   return (
      <div>
         <h1>Portfolio</h1>
         <div class="container">
            <div class="row">
               <div class="card col m-1">
                  <img src="./images/travelCheck.png" class="card-img-top project-image" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Travel Check</h5>
                     <p class="card-text">Javascript</p>
                     <a href="https://qkeddy.github.io/travelcheck/" target="_blank" rel="noreferrer" class="btn btn-primary m-1">Go to Project</a>
                     <a href="https://github.com/qkeddy/travelcheck" target="_blank" rel="noreferrer" class="btn btn-secondary m-1">Github</a>
                  </div>
               </div>
               <div class="card col m-1">
                  <img src="./images/planner.png" class="card-img-top project-image" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Day Planner</h5>
                     <p class="card-text">Javascript</p>
                     <a href="https://github.com/carol-tsai/day-planner" target="_blank" rel="noreferrer" class="btn btn-primary m-1">Go to Project</a>
                     <a href="https://carol-tsai.github.io/day-planner/" target="_blank" rel="noreferrer" class="btn btn-secondary m-1">Github</a>
                  </div>
               </div>
               <div class="card col m-1">
                  <img src="./images/quiz.png" class="card-img-top project-image" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Harry Potter Quiz</h5>
                     <p class="card-text">Javascript</p>
                     <a href="https://carol-tsai.github.io/harry-potter-quiz/" target="_blank" rel="noreferrer" class="btn btn-primary m-1">Go to Project</a>
                     <a href="https://github.com/carol-tsai/harry-potter-quiz" target="_blank" rel="noreferrer" class="btn btn-secondary m-1">Github</a>
                  </div>
               </div>
            </div>
            <div class='row'>
               <div class="card col m-1">
                  <img src="./images/tunes.png" class="card-img-top project-image" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Mood Tunes</h5>
                     <p class="card-text">Javascript</p>
                     <a href="https://intense-falls-14504.herokuapp.com/" target="_blank" rel="noreferrer" class="btn btn-primary m-1">Go to Project</a>
                     <a href="https://github.com/carol-tsai/nostalgia-tunes" target="_blank" rel="noreferrer" class="btn btn-secondary m-1">Github</a>
                  </div>
               </div>
               <div class="card col m-1">
                  <img src="./images/password.png" class="card-img-top project-image" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Password Generator</h5>
                     <p class="card-text">Javascript</p>
                     <a href="https://carol-tsai.github.io/password-generator/" target="_blank" rel="noreferrer" class="btn btn-primary m-1">Go to Project</a>
                     <a href="https://github.com/carol-tsai/password-generator" target="_blank" rel="noreferrer" class="btn btn-secondary m-1">Github</a>
                  </div>
               </div>
               <div class="card col m-1">
                  <img src="./images/weather.png" class="card-img-top project-image" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title">Weather Dashboard</h5>
                     <p class="card-text">Javascript</p>
                     <a href="https://carol-tsai.github.io/weather-dashboard/" target="_blank" rel="noreferrer" class="btn btn-primary m-1">Go to Project</a>
                     <a href="https://github.com/carol-tsai/weather-dashboard" target="_blank" rel="noreferrer" class="btn btn-secondary m-1">Github</a>
                  </div>
               </div>
            </div>
         </div>
         
         
      </div>
   );
}