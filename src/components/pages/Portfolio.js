import React from 'react';

export default function Portfolio() {
   return (
      <div>
         <h1>Portfolio</h1>
         <section class="project-card" id="first-project">
            <a href="https://qkeddy.github.io/travelcheck/"><img class="project-image" src="./images/travelCheck.png" alt="Screenshot of travelCheck with Cambodia data"/></a> 
         </section>
         <section class="project-card">
            <a href="https://carol-tsai.github.io/rock-paper-scissors/"><img class="project-image" src="./images/rock.jpg" alt="iphone calculator on marble background"/></a>
            <section class="label">
               <h3>Rock Paper Scissors</h3>
               <p>Javascript</p>
               <a class="github" href="https://github.com/carol-tsai/rock-paper-scissors">Github</a>
            </section>
         </section>
         <section class="project-card">
            <a href="https://carol-tsai.github.io/harry-potter-quiz/"><img class="project-image" src="./images/quiz.png" alt="yellow puzzel with piece missing"/></a>
            <section class="label">
               <h3>Harry Potter Quiz</h3>
               <p>Javascript</p>
               <a class="github" href="https://github.com/carol-tsai/harry-potter-quiz">Github</a>
            </section>
         </section>
         <section class="project-card">
            <a href="https://carol-tsai.github.io/day-planner/"><img class="project-image" src="./images/planner.png" alt="day planner"/></a>
            <section class="label">
               <h3>Day Planner</h3>
               <p>Javascript</p>
               <a class="github" href="https://github.com/carol-tsai/day-planner">Github</a>
            </section>
         </section>
      </div>
   );
}