import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {


/* Here below we can see that link to / is mapped with exercises, which means there would be a hyperlink exercises which when we click would 
direct to localhost:3000/, similarly 'Create exercise log' would map with localhost:3000/create 
Similarly 'Create User' hyperlink would map to localhost:3000/user and so on*/ 
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}