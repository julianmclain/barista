import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://www.dropbox.com/s/uv6c8t2zymcbo9y/barista-logo.png?raw=1"
        alt="barista"
      />
      <nav className="header-nav">
        <Link to="/login" className="header-nav-item">
          Login
        </Link>
        <Link to="/signup" className="header-nav-item">
          Sign up
        </Link>
        <Link to="/about" className="header-nav-item">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
