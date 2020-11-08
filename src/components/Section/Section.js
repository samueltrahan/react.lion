import React from 'react';
import {Link} from 'react-router-dom';
import './Section.css';

export default function Section() {
  return (
    <div className="section">
      <Link className="instagram" to="/instagram">
      <section >
        <h1 className="section-head">Instagram</h1>
      </section>
      </Link>
      <Link className="cinque" target="_blank" to="https://www.cinquewd.com">
      <section >
        <h1 className="section-head">CWD</h1>
      </section>
      </Link>
      <Link className="neon" to="/neon">
      <section >
        <h1 className="section-head">Extreme Neon</h1>
      </section>
      </Link>
      <Link className="breakfast" to="/breakfast">
      <section >
        <h1 className="section-head">Breakfast</h1>
      </section>
      </Link>
    </div>
  )
}
