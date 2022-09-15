import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="indigo accent-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://github.com/dragun-igor/food">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
