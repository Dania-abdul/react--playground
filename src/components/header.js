
import React from 'react';
import {
  NavLink,
} from "react-router-dom";

export class Header extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
          
            <div className="main__header">
                <h1>React Components</h1>
                <ul className="navbar-list" aria-label="navigation items">
                    <li className="navbar-item" aria-label="home"><NavLink  to="/home">Home</NavLink ></li>
                    <li className="navbar-item" aria-label="components"><NavLink  to="/components">Components</NavLink ></li>
                    <li className="navbar-item" aria-label="home">Projects</li>
                    <li className="navbar-item" aria-label="components">Stylesheets</li>
                </ul>
            </div>
      );
    }
  }

  export default Header;
