// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css' 
import LottieAnimation from './LottieAnimation';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    alert('Message sent!');
  };

  return (
    <> 
    <h2 className='cnt'>Contact Me</h2>
    <section id="contact">
       <LottieAnimation className='animation-container' />
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formState.name} onChange={handleChange} required />
        
        <label>Email</label>
        <input type="email" name="email" value={formState.email} onChange={handleChange} required />
        
        <label>Message</label>
        <textarea name="message" value={formState.message} onChange={handleChange} required></textarea>
        
        <button type="submit">Send</button>
      </form>
      <LottieAnimation className='animation-container' />
    </section>
    </>
  );
};

export default Contact;
