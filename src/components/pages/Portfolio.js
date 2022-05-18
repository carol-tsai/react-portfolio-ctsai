import React from 'react';
import Project from "./Project";

const projectsJson = require("../assets/projects.json");

export default function Portfolio() {
   return (
      <div>
         <h1>Portfolio</h1>
         <div className="container">
            <div className="row">
               <Project key={projectsJson[0].name} project={projectsJson[0]} />
               <Project key={projectsJson[1].name} project={projectsJson[1]} />
               <Project key={projectsJson[2].name} project={projectsJson[2]} />
            </div>
            <div className='row'>
               <Project key={projectsJson[3].name} project={projectsJson[3]} />
               <Project key={projectsJson[4].name} project={projectsJson[4]} />
               <Project key={projectsJson[5].name} project={projectsJson[5]} />
            </div>
         </div>
         
         
      </div>
   );
}