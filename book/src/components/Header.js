import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
          <div className="container">
              <ul className="navbar-nav">
                  <li className="nav-item"><Link className="nav-link material-icons fs2" to="/">keyboard_backspace</Link></li>
              </ul>
              <h1 className="fs2 navbar-brand text-light">Vocabulary Book</h1>
          </div>
        </nav>
    )
}
