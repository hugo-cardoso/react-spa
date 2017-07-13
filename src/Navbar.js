import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>

            <div className="navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;
