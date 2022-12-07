import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/movie-explorer-app" className="nav-title">
          Movie Explorer
        </Link>
        <ul className={sideBar ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" onClick={showSideBar}>
            <Link to="/" className="nav-link">
              Popular
            </Link>
          </li>
          <li className="nav-item" onClick={showSideBar}>
            <Link to="/top-rated" className="nav-link">
              Top Rated
            </Link>
          </li>
          <li className="nav-item" onClick={showSideBar}>
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={showSideBar}>
          {!sideBar ? <HiMenu className="bars" /> : <HiX className="close" />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
