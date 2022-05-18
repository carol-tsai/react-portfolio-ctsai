import React from 'react';

export default function Resume() {
   return (
      <div className='m-3'>
         <h1>Resume Page</h1>
         <a href="./files/resume.pdf" download>Click to Download Resume</a>
         <h3>Skills</h3>
         <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>ExpressJS</li>
         </ul>
      </div>
   );
}