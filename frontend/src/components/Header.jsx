import React from "react";

const Header = () => {
  return (
    <header id="header">
      <img
        src="https://www.dropbox.com/s/uv6c8t2zymcbo9y/barista-logo.png?raw=1"
        alt="barista"
      />
      <nav id="header-nav">
        <ul>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Sign in</li>
          <li className="header-nav-item">Sign out</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
