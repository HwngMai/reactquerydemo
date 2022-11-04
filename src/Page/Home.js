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
      <Link to='/react-useEffect'> React useEffect - old way</Link>
      <Link to='/react-useEffect-Pagin'> React query Paginating</Link>
      <Link to='/react-query-edit'> React query Editing</Link>
      <Link to='/react-query-edit-customhook'>
        {" "}
        React query Editing Custom Hook
      </Link>
      <Link to='/react-query-getqueryclient'>
        {" "}
        React query Editing Custom Hook
      </Link>
    </div>
  );
}

export default Home;
