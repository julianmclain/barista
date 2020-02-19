import React from "react";
import { Link } from "@reach/router";

const HeaderAuthenticated = () => {
  return (
    <header className="header">
      <img
        src="https://www.dropbox.com/s/uv6c8t2zymcbo9y/barista-logo.png?raw=1"
        alt="barista"
      />
      <nav className="header-nav">
        <Link to="/logout" className="header-nav-item">
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default HeaderAuthenticated;
