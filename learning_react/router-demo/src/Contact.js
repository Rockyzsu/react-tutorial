import React from 'react';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>You can contact us through the following channels:</p>
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: 123 - 456 - 7890</li>
      </ul>
      <Link to="/">Go Back Home Page</Link>
    </div>
  );
}
export default Contact;