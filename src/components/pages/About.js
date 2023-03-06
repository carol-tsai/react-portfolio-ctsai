import React from 'react';
import '../styles/About.css';

export default function About() {
   return (
      <div className='about'>
         <h1 className='heading'>About Me</h1>
         <img className="headshot" src="./images/headshot.jpeg" alt="Headshot of asian female wearing white sweater"></img>
         <p>
            Hello, my  name is Carol Tsai. I was born and raised in Mission  Viejo, California, but I moved to Philadelphia
            in the summer of 2021. I studied Environmental
            Sciences at UC Berkeley and graduated in 2020 with a minor in Geographic Information Systems (GIS). After working as a GIS Contractor at 
            Apple Maps for nearly two years, I decided that the next step for me was to switch into a career in web development. 
         </p>
         <p>
            I was first introduced to coding through some computer science classes I took in college. Although I
            initially only took these classes to learn a new skill on the side, it quickly became a new mindset that I
            gained for how to approach problems and find solutions in much of life. In my early career I began using some of my python
            knowledge to write simple automation scipts for my team. I saw that coding could have so many more applications
            and I wanted to learn more, so I decided to leave my job and enrolled in the UPenn LPS Coding Bootcamp, which introduced me to software
            development and plugged me into a network of like-minded learners. I am currently working as a full-stack developer for BikeCo LLC,
            where I have the privilege of sharing my love for the outdoors while also growing in my skills as a developer.
         </p>
      </div>
   );
}
