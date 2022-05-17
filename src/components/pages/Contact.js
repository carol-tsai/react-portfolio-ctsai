import React from 'react';

export default function Contact() {
   return (
      <div>
         <h1>Contact Page</h1>
         <p>
            Fill out this form to contact me:
         </p>
         <form>
            <input type="text" placeholder="Your name"></input> <br/>
            <input type="email" placeholder="Your email"></input> <br/>
            <textarea placeholder="Your message"></textarea>
         </form>
      </div>
   );
}
