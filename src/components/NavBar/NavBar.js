import React from 'react';
import './NavBar.css';
import Pic01 from '../../Assets/lion.png';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
      <a href="/"><img className="lion-logo" alt="" src={Pic01}></img></a>
      </div>
      <div className="links">
        <a className="nav-links" href="/projects">Projects</a>
        <a className="nav-links" href="/instagram">Instagram</a>
        <a className="nav-links" href="/about">About</a>
      </div>
    </div>
  )
}
