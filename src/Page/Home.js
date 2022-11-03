import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}>
      <h1>Home Page</h1>
      <Link to='/'>Home</Link>
      <Link to='/react-query'> React query</Link>
      <Link to='/react-useEffect'> React useEffect</Link>
    </div>
  );
}

export default Home;
