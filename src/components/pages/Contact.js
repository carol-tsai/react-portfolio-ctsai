import React, {useState} from 'react';

function validateEmail(email) {
   const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return regex.test(String(email).toLowerCase());
}

export default function Contact() {
   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

   const [errorMessage, setErrorMessage] = useState('');
   const { name, email, message } = formState;

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
         console.log('Submit Form', formState);
      }
      setFormState({name:'', email:'', message:''})
   };

   const handleChange = (e) => {
      if (e.target.name === 'email' && e.target.value.length) {
         const isValid = validateEmail(e.target.value);
         if (!isValid) {
            setErrorMessage('Your email is invalid.');
         } else {
            setErrorMessage('');
         }
      } else {
         if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
         } else {
            setErrorMessage('');
         }
      }
      if (!errorMessage) {
         setFormState({ ...formState, [e.target.name]: e.target.value });
         console.log('Handle Form', formState);
      }
   };

   return (
      <div>
         <h1>Contact Page</h1>
         <p>
            Fill out this form to contact me:
         </p>
         <form >
            <input type="text" placeholder="Your name" name="name" defaultValue={name} onBlur={handleChange}/> <br/>
            <input type="email" placeholder="Your email" name="email" defaultValue={email} onBlur={handleChange}/> <br/>
            <textarea placeholder="Your message" name="message" rows="6" defaultValue={message} onBlur={handleChange}></textarea>
            {errorMessage && (
               <div >
                  <p>{errorMessage}</p>
               </div>
            )}<br />
            <button class="btn btn-dark" onClick={handleSubmit} type="submit">Submit</button>
         </form>
      </div>
   );
}
