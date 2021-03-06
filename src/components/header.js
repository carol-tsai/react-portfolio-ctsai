import React from 'react';

function Header({ currentPage, handlePageChange }) {

   return (
      <header className="header">
         <h1>Carol Tsai</h1>
         <nav>
            <ul className="nav nav-tabs">
               <li className="nav-item">
                  <a
                     href="#about"
                     onClick={() => handlePageChange('About')}

                     className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  >
                     About
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     href="#portfolio"
                     onClick={() => handlePageChange('Portfolio')}

                     className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                  >
                     Portfolio
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     href="#contact"
                     onClick={() => handlePageChange('Contact')}

                     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                  >
                     Contact
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     href="#resume"

                     onClick={() => handlePageChange('Resume')}
                     className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                  >
                     Resume
                  </a>
               </li>
            </ul>
         </nav>
         
      </header>
   );
}

export default Header;