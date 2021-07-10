import './Header.scss';

import React from 'react';
import {
    Link as RouterLink
} from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar">
          <RouterLink className="link" to="/">
            <span className="text" variant="h5">
              Home
            </span>
          </RouterLink>
          <RouterLink className="link" to="/movies">
            <span className="text" variant="h5">
              Movies
            </span>
          </RouterLink>
        </div>
    );
  }
  
  export default Header;