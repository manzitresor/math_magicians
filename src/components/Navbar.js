import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', name: 'Home' },
  { path: 'calculator', name: 'Calculator' },
  { path: '/quote', name: 'Quote' },
];

function Navbar() {
  return (
    <>
      {
        links.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))
    }
    </>
  );
}

export default Navbar;
