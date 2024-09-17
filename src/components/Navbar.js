import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Single from "./Single";

function Navbar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getcategory.php")
      .then((r) => r.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <header id="header">
      <div className="siteHeader">
        <div className="wrapper clear">
          <a href="index.html" className="mobile-logo"></a>
          <ul className="mainMenu clear">
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <a href="#">Category</a>
              <ul>
                {category.map((l) => (
                  <Link
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <Link to={`/single/${l.name}`} element={<Single />}>
                      {l.name}
                    </Link>
                  </Link>
                ))}
              </ul>
            </li>
          </ul>

          <div className="pull-right clear">
            <div className="headerSocialLinks clear">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
            <div className="searchIcon"></div>
          </div>
          <span className="showMobileMenu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <a href="#" className="logo">
        IT SHARKS 33
      </a>
    </header>
  );
}

export default Navbar;
