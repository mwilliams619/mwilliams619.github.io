import React from 'react';
import { useBgColor } from '../functions/useBgColor'

function Contact() {
  useBgColor('rgb(160, 70, 58)')
  return (
    <div>
      <h2>Contact Me</h2>
      <p>This is the Contact page. Add your content here.</p>
    </div>
  );
}

export default Contact;