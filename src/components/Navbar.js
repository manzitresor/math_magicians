import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', name: 'Home' },
  { path: 'calculator', name: 'Calculator' },
  { path: '/quote', name: 'Quote' },
];

const logoStyles = {
  textDecoration: 'none',
  color: 'rgb(220, 145, 75)',
  fontSize: 25,
  letterSpacing: 5,
  marginLeft: 20,
  fontWeight: 'bold',
};

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" style={logoStyles}>Math Magicians</Link>
        <ul className="nav-items">
          {
        links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="nav-item">
              {link.name}
              {' '}
              |
            </Link>
          </li>
        ))
    }
        </ul>
      </div>
    </>
  );
}

export default Navbar;
