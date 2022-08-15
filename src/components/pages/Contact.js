import React, {useState} from 'react';
import '../styles/Contact.css';

function validateEmail(email) {
   const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return regex.test(String(email).toLowerCase());
}

export default function Contact() {
   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

   const [errorMessage, setErrorMessage] = useState('');
   const { name, email, message } = formState;

   const handleSubmit = (e) => {
      if (!errorMessage) {
         console.log('Submit Form', formState);
         setFormState('');
      }
      
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
      <div className='m-3'>
         <h1>Contact Page</h1>
         <p>
            Email: carol.tsai0224@gmail.com
         </p>
      </div>
   );
}
