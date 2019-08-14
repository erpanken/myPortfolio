import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            <ul id="nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
