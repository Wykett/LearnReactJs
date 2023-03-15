import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

const Home: React.FC = () => {

    return (
      <div className="home-container">
        <h1>Please choose a project</h1>
        <Link to="counter">Counter</Link>
      </div>
    );
  }
  
  export default Home;
  