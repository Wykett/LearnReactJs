import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

const Navbar: React.FC = () => {

  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <header>
      <div className="logo" onClick={toggle}>
        <Link to="/">Logo</Link>
      </div>

      <nav>
        <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
          <NavLink onClick={toggle} to="/">
            <li>home</li>
          </NavLink>
          <NavLink to="/app/counter" onClick={toggle}>
            <li>Counter</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
  }
  
  export default Navbar;
  