import React from 'react';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Here you can learn more about our company and our services.</p>
      <Link to="/">Go Back Home Page</Link>
    </div>
  );
}
export default About;