import React from 'react';
import {Link} from 'react-router-dom';
import './Section.css';

export default function Section() {
  return (
    <div className="section">
      <Link to="/instagram">
      <section className="instagram">
        <h1 className="section-head">Instagram</h1>
      </section>
      </Link>
      <Link target="_blank" to="https://www.cinquewd.com">
      <section className="cinque">
        <h1 className="section-head">CWD</h1>
      </section>
      </Link>
      <Link to="/neon">
      <section className="neon">
        <h1 className="section-head">Extreme Neon</h1>
      </section>
      </Link>
      <Link to="/breakfast">
      <section className="breakfast">
        <h1 className="section-head">Breakfast</h1>
      </section>
      </Link>
    </div>
  )
}
