import SearchIcon from "@mui/icons-material/Search";
import { Fragment } from "react";
import "./css/Navbar.css";
import WoofImage from "../assets/images/woof.png";
const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="true">
            <img src={WoofImage} className="woof__image" alt="" />
          </a>
          <div className="container-fluid">
            <form className="d-flex search__form">
              <div className="input-group">
                <input
                  className="form-control search me-2"
                  type="search"
                  placeholder="Search..."
                />
                <SearchIcon className="search__icon" />
              </div>
            </form>
          </div>
          <div className="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href={true} className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <button id="account__btn">create account</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
