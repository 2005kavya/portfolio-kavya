// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
      <p>Feel free to reach out via email at <a href="mailto:kavyaramasamy@gmail.com">kavyaramasamy@gmail.com</a>.</p>
      
      <div className="contact-links">
        <p>Or connect with me on:</p>
        <ul>
          <li>
            <a href="https://github.com/2005kavya" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kavya-r-2239892a3/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
