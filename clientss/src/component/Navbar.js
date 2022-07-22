import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <span class="navbar-brand mb-0 h1">TOKO SUMBER MAKMUR</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to={"/"}>
                <a class="nav-link ">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"About"}>
                <a class="nav-link ">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
