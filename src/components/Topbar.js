import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <section className="topbar">
        <h1>
            <Link className="logo" to="/"><i className="fas fa-hiking"></i>Hiking shop</Link>
        </h1>
    </section>

  )
}

export default Topbar;