import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
