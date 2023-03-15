import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

const Home: React.FC = () => {

    return (
      <div className="home-container">
        <h1>Please choose a project</h1>
        <p>
          <Link to="counter">Counter</Link>
        </p>
        <p>
          <Link to="search">Search</Link>
        </p>
      </div>
    );
  }
  
  export default Home;
  