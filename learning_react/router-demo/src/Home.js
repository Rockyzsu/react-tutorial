import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page of our application.</p>
      <Link to="/">Go to Home Page</Link>
      <br></br>
      <Link to="/about">Go to About Page</Link>
      <br />
      <Link to="/contact">Go to Contact Page</Link>
    </div>
  );
}
export default Home;
