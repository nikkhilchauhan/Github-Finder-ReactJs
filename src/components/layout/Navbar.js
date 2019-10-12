import React from 'react';
import PropTypes from 'prop-types'; //impt
import { Link } from 'react-router-dom'; //npm install react-router-dom

//rce
const Navbar = props => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1>
          <i className={props.icon} /> {props.title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'GitHib Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //only type string is allowed otherwise shows WARNING
  icon: PropTypes.string.isRequired //only type string is allowed otherwise shows WARNING
};

export default Navbar;
