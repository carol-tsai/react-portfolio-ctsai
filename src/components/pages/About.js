import React from 'react';
import '../styles/About.css';

export default function About() {
   return (
      <div className='about'>
         <h1 className='heading'>About Me</h1>
         <img className="headshot" src="./images/headshot.jpeg" alt="Headshot of asian female wearing white sweater"></img>
         <p>
            Hello, my  name is Carol Tsai. I am a full stack web developer at BikeCo LCC, where I have been learning and growing as a developer since 2022.
            I entered into web development after exploring Geographic Information Systems in college at UC Berkeley and as a GIS Analyst for Apple Maps.
         <p>
            I was first introduced to coding through some computer science classes I took in college. Although I
            initially only took these classes to learn a new skill on the side, it quickly became a new mindset that I
            gained for how to approach problems and find solutions in much of life. In my early career I began using some of my python
            knowledge to write simple automation scipts for my team. I saw that coding could have so many more applications
            and I wanted to learn more, so I decided to leave my job and enrolled in the UPenn LPS Coding Bootcamp, which introduced me to software
            development and plugged me into a network of like-minded learners. My current positions as the only developer for a small bike business allows me to 
            grow and expand my skills while also shareing my love for the outdoors and sport.
         </p>
      </div>
   );
}
