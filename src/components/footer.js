import React from 'react';
import './styles/Footer.css';

function Footer() {
   return (
      <footer>
         <a href="https://github.com/carol-tsai" target="_blank" rel="noreferrer"><img src="./images/github.png" class='icon m-2' alt="github icon"/></a>
         <a href="https://www.linkedin.com/in/carol-tsai/" target="_blank" rel="noreferrer"><img src="./images/linkedin.png" class='icon m-2' alt="linkedin icon" /></a>
         <a href="https://www.instagram.com/carolcattsai/" target="_blank" rel="noreferrer"><img src="./images/instagram.png" class='icon m-2' alt="instagram icon" /></a>
      </footer>
   );
}

export default Footer;